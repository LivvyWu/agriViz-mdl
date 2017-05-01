import {Component, OnInit} from '@angular/core';
import {AuthenticationService, User} from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new User('', '', '');
  public errorMsg = '';

  constructor(private authenticationService: AuthenticationService) {
  }

  login() {
    if (!this.authenticationService.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
  }
}
