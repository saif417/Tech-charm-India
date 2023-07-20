import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TechCharmAPiService } from '../service/tech-charm-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  myform!: FormGroup;
  getUserdetails: any;
  constructor(private fb: FormBuilder, private http: HttpClient, private auth:AuthService, private router: Router, private apiService : TechCharmAPiService){}
  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

    // if(this.auth.isLogedIn()){
    //   this.router.navigate(['home'])
    // }

    // this.apiService.getAllUsers().subscribe(res => {
    //   this.getUserdetails = res
    //   console.log(this.signup(), "-------------------------", this.myform)
    // });
  }

  signup(){
    console.log(1,this.myform);
    // this.http.post<any>("http://localhost:3000/signup", this.myform.value).subscribe(res=> {
    //   alert("done")
    //   this.myform.reset();
    //   this.router.navigate(['login'])
    // })

    const payload = {
      name: this.getUserdetails?.name,
      email: this.getUserdetails?.email,
      password: this.getUserdetails?.password,
      // id: this.getUserdetails?.id,
      // name: this.getUserdetails?.name,
      // email: this.getUserdetails?.email,
      // password: this.getUserdetails?.password,
      // dob: this.getUserdetails?.dob,
      // phone: this.getUserdetails?.phone,
      // gender: this.getUserdetails?.gender,
      // userType: this.getUserdetails?.userType,
      // isDelete: this.getUserdetails?.isDelete,
      // isActive: this.getUserdetails?.isActive,
      // createdDate: this.getUserdetails?.createdDate
    }

    this.apiService.postAllUsersData(this.myform.value).subscribe(res => {
      this.getUserdetails = res
      console.log(this.getUserdetails, "-------------------------")
      this.router.navigate(['login'])
    });
  }

  loginPage() {
    this.router.navigate(['login'])
  }


}
