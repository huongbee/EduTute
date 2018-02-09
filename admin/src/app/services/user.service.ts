import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
//import { Router } from '@angular/router';
import { UserInfo } from "./server"

@Injectable()
export class UserService {

    signIn() {

    }

    signUp(user: UserInfo) {
        const { fullname, email, birthdate, address, gender, phone, password } = user
        console.log(fullname, email, birthdate, address, gender, phone, password)
    }
}