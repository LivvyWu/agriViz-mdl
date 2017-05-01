import {Component, OnInit} from '@angular/core';
import {AuthenticationService, User} from '../services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '');

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  public login() {
    if (this.authenticationService.login(this.user)) {

    }
  }

  ngOnInit() {
  }
}
