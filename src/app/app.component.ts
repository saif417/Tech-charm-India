import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'techCharmIndia';
  ishide: boolean = true;
  constructor(private router:Router, private auth:AuthService) {
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
