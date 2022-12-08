import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { NavbarComponent } from './navbar/navbar.component'
const myRoute:Routes=[
  {
    path:"",
    component:AddStudentComponent
  },{
    path:"view",
    component:ViewStudentComponent
  },{
    path:"search",
    component:SearchStudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentComponent,
    SearchStudentComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
