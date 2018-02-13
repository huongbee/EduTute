import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { RequestWithToken } from "./services/request.service"

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component"

const APP_ROUTES: Routes = [
    { path: '', redirectTo: "admin/login", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "admin/register", component: RegisterComponent },
    { path: "admin/login", component: LoginComponent }
]
//export const routing = RouterModule.forRoot(APP_ROUTES)

//b1: khai bao 
//b2: import: app.module.

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    providers: [
        RequestWithToken
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }