import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthUserStateService } from './core/services/auth-user-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAuthenticated$: Observable<boolean>;

  constructor(
    private _authUserStateService: AuthUserStateService,
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this._authUserStateService.selectIsAuthenticated();
  }
}
