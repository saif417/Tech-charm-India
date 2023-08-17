import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TechCharmAPiService } from '../service/tech-charm-api.service';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  questionData: any;
  @Input() comment: any;
  @Output() emitGetAllQuestions = new EventEmitter<any>();
  answerBox: any;
  postAnswer: any;
  isEditing: any;
  userName: any;
  activeReplyIndex: number = -1;
  constructor(private apiService: TechCharmAPiService, private commonService: CommonService) { }

  ngOnInit() {
let userNameWithQuotes = sessionStorage.getItem("loginDetails");
if (userNameWithQuotes !== null) {
  this.userName = userNameWithQuotes.replace(/"/g, '');
}
  }

  openAnswerBox(event: any) {
    event.reply = false;
    event.answer = true;
    this.isEditing = event.questionId;
  }

  toggleReplyBox(index: number) {
    this.comment.commentLists.forEach((data: any, i: number) => {
      if (i === index) {
        data.replyOpen = !data.replyOpen; // Toggle the replyOpen state for the clicked comment
      } else {
        data.replyOpen = false; // Close other comment-boxes
      }
    this.isEditing = data.replyId;
    });
  }

  onAdd(event: any) {
    this.comment?.commentLists?.forEach((res: any) => {
      this.questionData = res;
    })
    const reqObj = {
      commentId: this.questionData?.commentId,
      content: event.replace(/<\/?p[^>]*>/g, ""),
      createdDate: this.questionData?.createdDate,
      replyId: this.isEditing
    }
    this.apiService.replyAns(reqObj).subscribe(res => {
      this.emitGetAllQuestions.emit(event);
      this.postAnswer = this.postAnswer?.replace(/<\/?p[^>]*>/g, "");
    })
  }

  newPost(event: any) {
    const reqObj = {
      commentId: this.questionData?.commentId,
      content: event.replace(/<\/?p[^>]*>/g, ""),
      createdDate: this.questionData?.createdDate,
      questionId: this.isEditing
    }
    this.apiService.saveAns(reqObj).subscribe(res => {
      this.emitGetAllQuestions.emit(event);
      this.postAnswer = this.postAnswer?.replace(/<\/?p[^>]*>/g, "");
      this.isEditing = 0;
      this.questionData?.content.unshift(reqObj);
      this.isEditing = false;
    })
  }

  getTimeAgo(createdDate: string): string {
    const now = new Date();
    const postedDate = new Date(createdDate);
    const timeDifferenceInSeconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  }
}
