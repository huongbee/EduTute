import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component';

import { userInfoReducer } from "./ngrx/reducers/userInfo";
// import { HomeComponent } from "./home/home.component";
// import { RegisterComponent } from "./register/register.component";
// import { LoginComponent } from "./login/login.component"
import { CourseComponent } from './course/course.component'

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    // HomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      userInfo: userInfoReducer
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
