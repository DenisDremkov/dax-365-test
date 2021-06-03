import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { CoreRouterService } from 'src/app/core/services/core-router.service';
import { AuthUserStateService } from 'src/app/core/services/auth-user-state.service';
import { LoginHttpService } from '../../services/login-http.service';

@Component({
  selector: 'dax365-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public isSubmitted: boolean;
  public inProgress = false;
  
  constructor(
    private _toastrService: ToastrService,
    private _authUserStateService: AuthUserStateService,
    private _loginHttpService: LoginHttpService,
    private _coreRouterService: CoreRouterService,
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    const email = new FormControl('test1@gmail.com', [Validators.required, Validators.email]);
    email.valueChanges.subscribe(res => {
      if (typeof res !== 'undefined' && res !== null && res.trim() === '') {
        email.setValue(undefined);
      }
    })

    const password = new FormControl('Qwerty123!', [Validators.required]);
    password.valueChanges.subscribe(res => {
      if (typeof res !== 'undefined' && res !== null && res.trim() === '') {
        password.setValue(undefined);
      }
    })

    this.formGroup = new FormGroup({
      email,
      password
    });
  }

  login(): void {
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      this.inProgress = true;
      this._loginHttpService
      .login({
        email: this.formGroup.controls.email.value,
        password: this.formGroup.controls.password.value
      })
      .pipe(
        catchError(err => {
          this._toastrService.error(err.message);
          this.inProgress = false;
          return throwError(err);
        }),
        switchMap(() => this._authUserStateService.subscribeToFirebaseUser()),
        switchMap(fbUser => this._authUserStateService.getProfile(fbUser))
      )
      .subscribe(profile => {    
        if (profile) {
          this._coreRouterService.goToDefaultPage();
        } else {
          this._coreRouterService.goToCompleteProfilePage();
        }
        this.inProgress = false;
      });
    }
  }

  goToRegistration(): void {
    this._coreRouterService.goToRegistrPage();
  }
}
