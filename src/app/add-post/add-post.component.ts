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
  previousStoreData: any;
  questionData: any;

  constructor(private auth: AuthService, private apiService: TechCharmAPiService) { }

  ngOnInit() {
    this.getAllQuestions(event);
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
      this.getAllQuestions(event);
    });
  }

  getAllQuestions(event:any) {
    this.apiService.getQuestions().subscribe(data => {
      this.questionData = data;
    });
  }
}
