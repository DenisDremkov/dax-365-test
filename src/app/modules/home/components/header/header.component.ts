import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { APP_ROUTES } from 'src/app/core/services/core-router.service';
import { IAuthUserProfile } from '../../../../core/interfaces/auth-user-profile.interface';
import { AuthUserStateService } from '../../../../core/services/auth-user-state.service';

@Component({
  selector: 'dax365-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public readonly APP_ROUTES = APP_ROUTES;
  public authUserProfile$: Observable<IAuthUserProfile>;
  public isAuthenticated$: Observable<boolean>;

  constructor(
    private _authUserStateService: AuthUserStateService
  ) {}
  
  ngOnInit(): void {
    this.isAuthenticated$ = this._authUserStateService.selectIsAuthenticated();
    this.authUserProfile$ = this._authUserStateService.selectAuthUserProfile();
  }
}
