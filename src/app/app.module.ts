import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommentsComponent } from './comments/comments.component';
// import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditorComponent,
    SignupComponent,
    AddPostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EditorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
