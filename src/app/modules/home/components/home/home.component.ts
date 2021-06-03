import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthUserStateService } from 'src/app/core/services/auth-user-state.service';

@Component({
  selector: 'dax365-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public isProfileCompleted$: Observable<boolean>;

  constructor(
    private _authUserStateService: AuthUserStateService
  ) {}

  ngOnInit(): void {
    this.isProfileCompleted$ = this._authUserStateService.selectIsProfileCompleted();
  }
}
