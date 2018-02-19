import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RequestWithToken } from '../services/request.service'
import { Observable } from 'rxjs/Observable';
import { UserResponseFromServer } from "../services/userHelper"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private user: UserService,
    private request: RequestWithToken
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log(token);
    this.request.post('/home', { token })
      .then((response: UserResponseFromServer) => {
        const { error, message, user } = response
        if (error) return alert(message);
        console.log(user)
      })
      .catch(err => alert(err.message));
  }

}
