"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('admin', 'admin@admin.com', 'admin'),
    new User('123', 'lulutt@hotmail.com', '123')
];
var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('username');
        this.router.navigate(['index']);
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('username', authenticatedUser.username);
            this.router.navigate(['index']);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem('username') === null) {
            this.router.navigate(['login']);
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
