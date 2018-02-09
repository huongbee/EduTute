import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    // user: UserService;

    constructor(private user: UserService) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            fullname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')),
            password: new FormControl('', Validators.pattern('(.*).{6,}')),
            //   111111
            rePassword: new FormControl('', Validators.pattern('(.*).{6,}')),
            birthdate: new FormControl('', Validators.required),
            address: new FormControl('', Validators.minLength(5)),
            gender: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.minLength(9))
        })
    }
    get checkPasswordNotMatch(): boolean {
        const passwordInput = this.registerForm.get('password');
        const rePasswordInput = this.registerForm.get('rePassword');
        return rePasswordInput.touched && (rePasswordInput.value !== passwordInput.value);
    }
    signUp() {
        this.user.signUp(this.registerForm.value);

    }

}
