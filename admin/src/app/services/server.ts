import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store"

@Injectable()
export class UserInfo {
    fullname: string;
    email: string;
    birthdate: string
    address: string
    gender: string
    phone: string
    password: string
}
export interface UserInfoAction extends Action {
    type: 'USER_SIGN_IN' | 'USER_SIGN_OUT' | 'USER_UPDATE_INFO';
    user?: UserInfo | null;
}


export interface AppState {
    userInfo: UserInfo;
    expiredTime: number;
}

export interface ServerResponse {
    success: boolean;
    [propName: string]: any;
}

export interface UserResponseFromServer extends ServerResponse {
    user: {
        __id: string;
        fullname: string;
        email: string;
        birthdate: string;
        password: string;
        gender: string;
        phone: string;
        address: string;
        token: string;
    };
}
