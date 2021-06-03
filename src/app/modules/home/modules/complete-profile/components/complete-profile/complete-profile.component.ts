import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { catchError, switchMap } from 'rxjs/operators';

import { CoreHttpService } from 'src/app/core/services/core-http.service';
import { CoreRouterService } from 'src/app/core/services/core-router.service';
import { AuthUserStateService } from 'src/app/core/services/auth-user-state.service';
import { CompleteProfileHttpService } from '../../services/complete-profile-http.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dax365-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  public formGroup: FormGroup;
  public isSubmitted: boolean;
  public inProgress = false;
  
  constructor(
    private _toastrService: ToastrService,
    private _coreRouterService: CoreRouterService,
    private _authUserStateService: AuthUserStateService,
    private _coreHttpService: CoreHttpService,
    private _completeProfileHttpService: CompleteProfileHttpService,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl(undefined, [Validators.required]),
      lastName: new FormControl(undefined, [Validators.required])
    });
  }

  next(): void {
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      this.inProgress = true;
      this._completeProfileHttpService
        .completeProfile({
          firstName: this.formGroup.controls.firstName.value,
          lastName: this.formGroup.controls.lastName.value,
          email: this._authUserStateService.getFireBaseUser().email
        })
        .pipe(
          catchError(err => {
            this._toastrService.error(err?.message || 'some error')
            this.inProgress = false;
            return throwError(err);
          }),
          switchMap(() => this._coreHttpService.getProfileData())
        )
        .subscribe(profile => {
          this._authUserStateService.setIsProfileCompleted(true);
          this._authUserStateService.setAuthUserProfile(profile);
          this._coreRouterService.goToDefaultPage();
          this.inProgress = false;
        });
    }
  }
}
