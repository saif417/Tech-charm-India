import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './password-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  loginForm!: FormGroup;
  submitted = false;
  loginPassword = false;
  toggleRegisterPage = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['test', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });

      this.loginForm = this.formBuilder.group({
          loginEmail: ['', [Validators.required, Validators.email]],
          loginPassword: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onRegisterSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  submitLoginForm(){
    console.log(123,this.loginForm)
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  getLoginForm(){
    this.loginPassword = !this.loginPassword
  }

  getToggleRegisterPage(){
    this.toggleRegisterPage = !this.toggleRegisterPage
  }
}
