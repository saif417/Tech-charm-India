import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public userName = new Subject<any>();
  constructor() { }


  public getUserName(): Observable<any> {
    return this.userName.asObservable();
  }
}
