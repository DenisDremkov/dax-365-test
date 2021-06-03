import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { CoreRouterService } from '../../../core/services/core-router.service';
import { AuthUserStateService } from '../../../core/services/auth-user-state.service';

@Component({
  selector: 'dax365-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent {

  public faSignOutAlt = faSignOutAlt;
  
  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _authUserStateService: AuthUserStateService,
    private _coreRouterService: CoreRouterService,
  ) {}

  logout(): void {
    this._angularFireAuth
      .signOut()
      .then(() => {
        this._authUserStateService.clearAuthState()
        this._coreRouterService.goToLoginPage();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
