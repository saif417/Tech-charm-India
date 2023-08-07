import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TechCharmAPiService } from '../service/tech-charm-api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() questionData: any;
  @Output() emitGetAllQuestions = new EventEmitter<any>();
  openAnswerBox: any;
  postAnswer: any;

  constructor(private apiService: TechCharmAPiService) { }

  ngOnInit() {
  }

  PostyourAnswer(event: any) {
    this.openAnswerBox = event;
  }

  newAnswerPost(event: any) {
    this.questionData?.forEach((ans: any) => {
      const questionsData = ans.commentLists;
      const reqObj = {
        commentId: questionsData?.commentId,
        content: this.postAnswer?.replace(/<\/?p[^>]*>/g, ""),
        createdDate: questionsData?.createdDate,
        questionId: event
      }
      if (ans.questionId === this.openAnswerBox) {
        this.apiService.saveAns(reqObj).subscribe(res => {
          this.emitGetAllQuestions.emit(event);
          this.postAnswer = "";
          this.openAnswerBox = 0;
        })
      }
    });
  }
}
