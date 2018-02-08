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
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')),
      rePassword: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.pattern('([0-3]{2})-([0-3]{2})-(\d{4})')),
      address: new FormControl('', Validators.minLength(5)),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.minLength(9))
    })
  }
  register() { }

}
