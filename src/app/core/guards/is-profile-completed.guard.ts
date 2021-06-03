import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { CoreRouterService } from '../services/core-router.service';
import { AuthUserStateService } from '../services/auth-user-state.service';


@Injectable()
export class IsProfileCompletedGuard implements CanActivate {

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
    const isCompleted = this._authUserStateService.getIsProfileCompleted();
    if (!isCompleted) {
      this._coreRouterService.goToCompleteProfilePage();
    }
    return isCompleted;
  }
}
