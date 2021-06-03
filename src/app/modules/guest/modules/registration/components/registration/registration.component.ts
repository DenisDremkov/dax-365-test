import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { CoreRouterService } from 'src/app/core/services/core-router.service';
import { AuthUserStateService } from 'src/app/core/services/auth-user-state.service';
import { RegistrationHttpService } from '../../services/registration-http.service';

@Component({
  selector: 'dax365-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public formGroup: FormGroup;
  public isSubmitted: boolean;
  public inProgress = false;

  constructor(
    private _toastrService: ToastrService,
    private _coreRouterService: CoreRouterService,
    private _registrationHttpService: RegistrationHttpService,
    private _authUserStateService: AuthUserStateService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('1@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('Qwerty123!', [Validators.required])
    });
  }

  goToLogin(): void {
    this._coreRouterService.goToLoginPage();
  }

  registr(): void {
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      this.inProgress = true;
      this._registrationHttpService
        .registration({
          email: this.formGroup.controls.email.value,
          password: this.formGroup.controls.password.value
        })
        .pipe(
          catchError(err => {
            this.inProgress = false;
            this._toastrService.error(err.message);
            return throwError(err);
          }),
          switchMap(() => this._authUserStateService.subscribeToFirebaseUser()),
        )
        .subscribe(res => {
          this.inProgress = false;
          this._coreRouterService.goToCompleteProfilePage();
        });
    }
  }
}
