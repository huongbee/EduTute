import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'
import { Store } from '@ngrx/store';
import { AppState, UserInfo } from './userHelper';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    userInfo: Observable<UserInfo>;

    constructor(private store: Store<AppState>, private router: Router) {
        this.userInfo = this.store.select('userInfo');
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.from(this.userInfo).map(u => {
            if (!u) {
                this.router.navigate(['/admin/login']);
                return false;
            }
            return true;
        });
    }
}
