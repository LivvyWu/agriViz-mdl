import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-viz-header',
  templateUrl: './viz-header.component.html',
  styleUrls: ['./viz-header.component.scss'],
  providers: [AuthenticationService]
})
export class VizHeaderComponent implements OnInit {
  isLogin: boolean;
  username: string;

  constructor(private authenticationService: AuthenticationService) {
    if (localStorage.getItem('username')) {
      this.isLogin = true;
      this.username = localStorage.getItem('username');
    }
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }
}
