import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './password-match.validator';
import { TechCharmAPiService } from '../service/tech-charm-api.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  registrationData: any;


  constructor(private formBuilder: FormBuilder, private apiService : TechCharmAPiService, private http: HttpClient, private router: Router, private auth:AuthService) { }

  ngOnInit() {
      // if(this.auth.isLogedIn()){
      //   this.router.navigate(['home'])
      // }
      this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:  ['',[Validators.required, Validators.minLength(6), 
        Validators.maxLength(40)], ],})
    
  
        // this.apiService.getAllUsers()
        // .subscribe(res => console.log(res));


        // this.formvalue = this.formBuilder.group({
        //   email: ['', [Validators.required, Validators.email]],
        //   password: ['', [Validators.required, Validators.minLength(6)]]
        // })
    
  }

get f(): { [key: string]: AbstractControl } {
  return this.loginForm.controls 
}

  login(){
    console.log(1,this.loginForm)
    this.submitted = true;
    //  this.router.navigate(['/addPost']);
  }

  signupPage(){
    this.router.navigate(['signup'])
  }

  // getLoginForm(){
  //   this.loginPassword = !this.loginPassword
  // }

  // getToggleRegisterPage(){
  //   this.toggleRegisterPage = !this.toggleRegisterPage
  // }
}
