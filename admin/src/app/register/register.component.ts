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
            fullname: new FormControl('huong huong', Validators.required),
            email: new FormControl('huongnguyenak96@gmail.com', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')),
            password: new FormControl('111111', Validators.pattern('(.*).{6,}')),
            //   111111
            rePassword: new FormControl('111111', Validators.pattern('(.*).{6,}')),
            birthdate: new FormControl('2010/10/10', Validators.required),
            address: new FormControl('Distric 1', Validators.minLength(5)),
            gender: new FormControl('female', Validators.required),
            phone: new FormControl('0987654321', Validators.minLength(9))
        })
    }
    get checkPasswordNotMatch(): boolean {
        const passwordInput = this.registerForm.get('password');
        const rePasswordInput = this.registerForm.get('rePassword');
        return rePasswordInput.touched && (rePasswordInput.value !== passwordInput.value);
    }
    signUp() {
        this.user.signUp(this.registerForm.value)
            .then(user => { console.log(user) })
            .catch(err => console.log(err));
    }

}
