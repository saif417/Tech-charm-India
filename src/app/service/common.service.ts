import { Injectable } from '@angular/core';
import { Observable, Subject, from, merge } from 'rxjs';
import { TechCharmAPiService } from './tech-charm-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public userName = new Subject<any>();
  questionsList: any = [];
  commentAction$ = new Subject<Comment>();
  commentSubject$ = this.commentAction$.asObservable();
  commentStream$ = merge(this.commentSubject$
  );
  questionData: any;
  constructor(private http: HttpClient, private apiService: TechCharmAPiService) { }

  public getUserName(): Observable<any> {
    return this.userName.asObservable();
  }
  getComments() {
    return this.commentStream$;
  }

  addComment(comment: Comment) {
    this.commentAction$.next(comment);
  }

  getAllQuestions(event: any) {
    return this.apiService?.getQuestions();
  }
}
