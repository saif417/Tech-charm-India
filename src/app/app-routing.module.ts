import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path: '**', redirectTo:'login',pathMatch:'full'},
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'Tags',component:HomeComponent},
  {path: 'addPost',component:AddPostComponent},
  {path: 'questions',component:AddPostComponent},
  {path: 'login',component:LoginComponent},
  {path: 'editor',component:EditorComponent},
  {path: 'signup',component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
