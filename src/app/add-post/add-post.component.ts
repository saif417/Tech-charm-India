import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TechCharmAPiService } from '../service/tech-charm-api.service';
import { CommonService } from '../service/common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  newPostTopic: any;
  newPostDetail: any;
  postAnswer: any;
  questionData: any;
  isEditing: any;
  commentStream$!: Observable<any>;
  src: Observable<any>;
  
  constructor(private auth: AuthService, private apiService: TechCharmAPiService, private commonService: CommonService) {
    this.src = commonService.getComments();
   }

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
    this.apiService?.postQuestions(reqObj)?.subscribe(res => {
      this.getAllQuestions(event);
    });
  }

  getAllQuestions(event:any) {
    // this.apiService?.getQuestions()?.subscribe(data => {
    //   this.questionData = data;
    // });
    this.commonService.getAllQuestions(event).subscribe(data => {
      this.questionData = data;
      this.commonService.questionsList = this.questionData;
      this.commonService.commentAction$.next(this.questionData);
    });
  }
}