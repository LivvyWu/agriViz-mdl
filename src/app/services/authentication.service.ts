import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


export class User {
  constructor(public username: string,
              public email: string,
              public password: string) {
  }
}

var users = [
  new User('admin', 'admin@admin.com', 'admin'),
  new User('123', 'lulutt@hotmail.com', '123')
];

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) {
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['index']);
  }

  login(user: User) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('username', authenticatedUser.username);
      window.location.href = 'index';
      //this.router.navigate(['index']);
      return true;
    }
    return false;

  }

  checkCredentials() {
    if (localStorage.getItem('username') === null) {
      this.router.navigate(['login']);
    }
  }
}
