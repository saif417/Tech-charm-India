import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'techCharmIndia';
  ishide: boolean = true;
  userName: any;
  constructor(private router:Router, private auth:AuthService,private service:CommonService) {
    const events = 
    router.events.
    pipe(
      filter(event=>event instanceof NavigationEnd));

    events.subscribe((e:any)=>{
      console.log(e.urlAfterRedirects, "-----------------")
      if(e.urlAfterRedirects.includes(['login']) || e.urlAfterRedirects.includes(['signup'])){
        this.ishide = false
      } else {
        this.ishide = true
      }
    }) 
  }

  ngOnInit() {
    this.service.userName.subscribe(res => {
      this.userName = res;
      console.log(7,this.userName)
    });
  }

  profile(){
    if(this.auth.isLogedIn()){
      alert("Did you want to logout!")
      localStorage.removeItem('token')
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['login'])
    }
  }
}
