// ang
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { CoreRouterService } from '../services/core-router.service';
import { AuthUserStateService } from '../services/auth-user-state.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _authUserStateService: AuthUserStateService,
    private _coreRouterService: CoreRouterService,
  ) {}

  public canActivateChild(): boolean {
    return this._check();
  }

  public canLoad(): boolean {
    return this._check();
  }

  public canActivate(): boolean {
    return this._check();
  }

  public _check(): boolean {
    const isAuth = this._authUserStateService.getIsAuthenticated();
    if (!isAuth) {
      this._coreRouterService.goToLoginPage();
    }
    return isAuth;
  }
}
