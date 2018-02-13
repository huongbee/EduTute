import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserService } from "./services/user.service"
import { AppState } from './services/userHelper';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent {
    title = 'app';
    adminLogin: Observable<boolean>;

    ngOnInit() {
        this.adminLogin = this.store.select('userInfo').map(userInfo => !!userInfo);
        this.adminLogin.subscribe(console.log);
    }
    constructor(private user: UserService, private store: Store<AppState>) {

    }

}
