import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TechCharmAPiService } from '../service/tech-charm-api.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent {
  postAnswer: any;
  @Output() add = new EventEmitter<string>();
  @Output() newPost = new EventEmitter<string>();
  constructor(private apiService: TechCharmAPiService) { }

  ngOnInit() {
  }

  post() {
    if (this.postAnswer.trim()) {
      this.add.emit(this.postAnswer);
      this.postAnswer = '';
    }
}
}
