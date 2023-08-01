import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TechCharmAPiService } from '../service/tech-charm-api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  newPostTopic: any;
  newPostDetail: any;
  postAnswer: any;
  // listData:any = [];
  previousStoreData: any;
  questionData: any;
  openAnswerBox: any;
  reqObj!: { commentId: any; content: any; createdDate: any; questionId: any; };

  constructor(private auth: AuthService, private apiService: TechCharmAPiService) { }

  ngOnInit() {
    this.getAllQuestions();
  }
  postQuestion() {
    const reqObj = {
      id: this.questionData?.id,
      questionId: this.questionData?.questionId,
      question: this.newPostTopic,
      questionDescription: this.newPostDetail,
      createdDate: this.questionData?.data,
      isActive: true,
      isDelete: true
    }
    this.apiService.postQuestions(reqObj).subscribe(res => {
      console.log(3, res)
      this.getAllQuestions();
    });
  }
  PostyourAnswer(event: any) {
    console.log(1213, event)
    this.openAnswerBox = event;
  }

  getAllQuestions() {
    this.apiService.getQuestions().subscribe(data => {
      this.questionData = data;
    });
  }

newAnswerPost(event:any){
  this.questionData?.forEach((ans: any) => {
    ans.commentLists;
      const questionsData = ans.commentLists;
      console.log(5, questionsData);
      const reqObj = {
        commentId: questionsData?.commentId,
        content: this.postAnswer?.replace(/<\/?p[^>]*>/g, ""),
        createdDate: questionsData?.createdDate,
        questionId: event
      }
      if (ans.questionId === this.openAnswerBox ) {
        this.apiService.saveAns(reqObj).subscribe(res => {
          this.getAllQuestions();
          this.postAnswer = "";
          this.openAnswerBox = 0;
          console.log(3, res); 
        })
      }
    });
  }
}
