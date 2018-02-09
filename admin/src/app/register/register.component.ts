import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm;
  constructor() { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')),
      password: new FormControl('', Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}')),
      rePassword: new FormControl('', Validators.pattern('(.*).{6,}')),
      birthdate: new FormControl('', Validators.required),
      address: new FormControl('', Validators.minLength(5)),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.minLength(9))
    })
  }
  get showPasswordNotMatch(): boolean {
    const passwordInput = this.RegisterForm.get('password');
    const rePasswordInput = this.RegisterForm.get('rePassword');
    return rePasswordInput.touched && (rePasswordInput.value !== passwordInput.value);
  }
  register() { }

}
