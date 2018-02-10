import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { HttpModule } from "@angular/http"

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component';

import { userInfoReducer } from "./ngrx/reducers/userInfo";
import { CourseComponent } from './course/course.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({
      userInfo: userInfoReducer
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
