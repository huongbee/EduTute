import { Injectable } from '@angular/core';
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
    };
}
