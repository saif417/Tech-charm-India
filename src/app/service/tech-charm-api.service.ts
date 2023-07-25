import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechCharmAPiService {
  baseUrl : string = 'https://localhost:7034/'
  constructor(private http : HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this.baseUrl + 'api/UserDetails')
  }

  postAllUsersData(payload:any){
    return this.http.post<any>(this.baseUrl + 'api/UserDetails', payload)
  }

  getQuestions(){
    return this.http.get<any>(this.baseUrl + 'api/Questions')
  }

  postQuestions(data:any){
    return this.http.post<any>(this.baseUrl + 'api/Questions', data)
  }


}
