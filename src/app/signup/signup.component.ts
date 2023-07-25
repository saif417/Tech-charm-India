import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TechCharmAPiService } from '../service/tech-charm-api.service';
import {MustMatch} from '../login/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  myform!: FormGroup;
  getUserdetails: any;
  submitted: any;
  constructor(private fb: FormBuilder, private http: HttpClient, private auth:AuthService, private router: Router, private apiService : TechCharmAPiService){}
  ngOnInit(): void {
   this.myform = this.fb.group({
      name: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password:  ['',[Validators.required, Validators.minLength(6), 
        Validators.maxLength(40)], ],
      confirmPassword:  ['', [Validators.required]],
    },
     {
        validators: [MustMatch('password', 'confirmPassword')],
      })
    // if(this.auth.isLogedIn()){
    //   this.router.navigate(['home'])
    // }

    // this.apiService.getAllUsers().subscribe(res => {
    //   this.getUserdetails = res
    //   console.log(this.signup(), "-------------------------", this.myform)
    // });
  }

get f(): { [key: string]: AbstractControl } {
  return this.myform.controls 
}
  
  signup(){
    console.log(1,this.myform);
     this.submitted = true;

    // this.http.post<any>("http://localhost:3000/signup", this.myform.value).subscribe(res=> {
    //   alert("done")
    //   this.myform.reset();
    //   this.router.navigate(['login'])
    // })

    const payload = {
      name: this.getUserdetails?.name,
      email: this.getUserdetails?.email,
      password: this.getUserdetails?.password,
    }

    this.apiService.postAllUsersData(this.myform.value).subscribe(res => {
      this.getUserdetails = res;
      console.log(this.getUserdetails, "-------------------------")
      this.router.navigate(['login'])
    });
  }

   onReset(): void {
    this.submitted = false;
    this.myform.reset();
  }

  loginPage() {
    this.router.navigate(['login'])
  }


}
