import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserService } from "./services/user.service"
import { AppState } from './services/server';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'app';
  adminLogin = false

  constructor(private user: UserService, private store: Store<AppState>) { }

}
