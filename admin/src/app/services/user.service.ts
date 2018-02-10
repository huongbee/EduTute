import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserInfo, UserResponseFromServer, UserInfoAction, AppState } from "./helper";
import { RequestWithToken } from "./request.service";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class UserService {

    constructor(
        private request: RequestWithToken,
        private store: Store<AppState>,
        private router: Router
    ) { }
    signIn() {

    }

    signUp(user: UserInfo) {
        const { fullname, email, birthdate, address, gender, phone, password } = user
        //console.log(fullname, email, birthdate, address, gender, phone, password)

        return this.request.post('/admin/register', { fullname, email, birthdate, address, gender, phone, password })
            .then((response: UserResponseFromServer) => {
                const { success, user } = response;
                console.log(user)

                localStorage.setItem('token', user.token);

                if (!success) return alert('Email da co nguoi su dung');

                const userInfoAction: UserInfoAction = { type: 'USER_SIGN_UP', user: { fullname, email, birthdate, address, gender, phone, password } };

                this.store.dispatch(userInfoAction);
                this.router.navigate(['/admin/login']);
            })
            .catch(err => alert('Khong the truy cap toi server'));
    }
}