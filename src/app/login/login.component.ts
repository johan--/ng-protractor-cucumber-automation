import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
  }

  public get isLoggedIn() : boolean {
    return false;
  }

  login() {
    this.loginService.login();
  }

  logout() {

  }

}
