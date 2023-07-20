import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  registerForm!: FormGroup;
  submitted = false;
  registrationData: any;


  constructor(private formBuilder: FormBuilder, private apiService : TechCharmAPiService, private http: HttpClient, private router: Router, private auth:AuthService) { }

  ngOnInit() {
      if(this.auth.isLogedIn()){
        this.router.navigate(['home'])
      }
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [[Validators.required, Validators.email]]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          dob: ['', Validators.required],
          phone: ['', Validators.required],
          gender: ['', Validators.required],
          userType: ['', Validators.required],
          isDelete: [0, Validators.required],
          isActive: [0, Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          
      });
    
  
        // this.apiService.getAllUsers()
        // .subscribe(res => console.log(res));


        // this.formvalue = this.formBuilder.group({
        //   email: ['', [Validators.required, Validators.email]],
        //   password: ['', [Validators.required, Validators.minLength(6)]]
        // })
    
  }

  login(){
    this.apiService.getAllUsers().subscribe(res => {
      const user = res.find((a:any)=> {
        return a.email === this.registerForm.value.email && a.password === this.registerForm.value.password 
      })
      if(user) {
        alert("login-done")
        this.router.navigate(['editor'])
      }
    });
  }

  // login(){
  //   this.http.get<any>("http://localhost:3000/signup", this.formvalue.value).subscribe(res=> {
  //     // const user = res.find((a:any)=> {
  //     //   return a.email === this.formvalue.value.email && a.password === this.formvalue.value.password 
  //     // })
  //     this.registrationData = res
  //     console.log(this.registrationData , "---------------------")
  //      const user = 
  //      this.registrationData.email === this.formvalue.value.email &&  this.registrationData.password === this.formvalue.value.password 
  

  //     if(user){
  //       alert("login-done")
  //       // this.tost.success({detail: 'Sucess', summary: "Login successfully", duration: 8000})
  //       this.formvalue.reset();
  //       this.router.navigate(['home'])
  //       localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
  //       this.formvalue.value.email? localStorage.setItem('usertype', 'employee'): ''
  //     } else {
  //       alert ("user-not-found")
  //       // this.tost.error({detail: 'Error Message', summary: "User not found", duration: 8000})

  //     }
  //   })
  // }








  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  //     // display form values on success
  //     alert('SUCCESS!! :-)\n\n' + JSON?.stringify(this.registerForm.value, null, 4));
  // }

  // onReset() {
  //     this.submitted = false;
  //     this.registerForm.reset();
  // }

  signupPage(){
    this.router.navigate(['signup'])
  }
}
