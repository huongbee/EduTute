import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { UserService } from "../services/user.service"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    LoginForm: FormGroup
    constructor(private user: UserService) { }

    ngOnInit() {
        this.LoginForm = new FormGroup({
            email: new FormControl('huongnguyenak96@gmail.com', Validators.email),
            password: new FormControl('111111', Validators.required)
        })
    }

    signIn() {
        const { email, password } = this.LoginForm.value
        this.user.signIn(email, password)
    }

}
