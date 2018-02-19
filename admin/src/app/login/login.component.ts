import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private user: UserService) {
    const token = localStorage.getItem('token');
    if (token != '') localStorage.removeItem('token');
    //console.log(token)
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('huongnguyenak96@gmail.com', Validators.email),
      password: new FormControl('111111', Validators.required)
    })
  }

  signIn() {
    const { email, password } = this.loginForm.value
    this.user.signIn(email, password);
  }
}
