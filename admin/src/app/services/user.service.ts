import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';

import { Router } from '@angular/router';


@Injectable()
export class UserService {
    private request
    private store
    private router: Router

    signIn() {

    }
    register(email: string, password: string, name: string, phone: string, address: string) {
        return this.request.post('/user/signup', { email, password, name, phone, address })
            .then((response) => {
                const { success, user } = response;
                localStorage.setItem('token', user.token);
                if (!success) return alert('Email da co nguoi su dung');
                // const userInfoAction: UserInfoAction = { type: 'USER_SIGN_IN', user: { email, name, phone, address, isVerified: false } };
                // this.store.dispatch(userInfoAction);
                this.router.navigate(['/verify']);
            })
            .catch(err => alert('Khong the truy cap toi server'));
    }
}