import { Routes, RouterModule } from "@angular/router"

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: "admin/login", pathMatch: "full" },
    { path: "admin/register", component: RegisterComponent },
    { path: "admin/login", component: LoginComponent }
]
export const routing = RouterModule.forRoot(APP_ROUTES)

//b1: khai bao 
//b2: import: app.module.ts