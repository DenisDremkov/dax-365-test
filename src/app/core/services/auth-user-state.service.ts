import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IFireBaseUser } from '../interfaces/firebase-user.interface';
import { IAuthUserProfile } from '../interfaces/auth-user-profile.interface';
import { CoreHttpService } from './core-http.service';
  
@Injectable()
export class AuthUserStateService {

  constructor(
    private _coreHttpService: CoreHttpService,
    private _angularFireAuth: AngularFireAuth,
  ) {}

  private _isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private _isAuthenticatedObs$: Observable<boolean> = this._isAuthenticated$.asObservable();

  private _fireBaseUser$ = new BehaviorSubject<IFireBaseUser>(null);

  private _authUserProfile$ = new BehaviorSubject<IAuthUserProfile>(null);
  private _authUserProfileObs$: Observable<IAuthUserProfile> = this._authUserProfile$.asObservable();

  private _isProfileCompleted$ = new BehaviorSubject<boolean>(undefined);
  private _isProfileCompletedObs$: Observable<boolean> = this._isProfileCompleted$.asObservable();

  // is Authenticated
  setIsAuthenticated(val: boolean): void {
    this._isAuthenticated$.next(val);
  }
  selectIsAuthenticated(): Observable<boolean> {
    return this._isAuthenticatedObs$;
  }
  getIsAuthenticated(): boolean {
    return this._isAuthenticated$.value;
  }

  // user profile
  setAuthUserProfile(data: IAuthUserProfile): void {
    this._authUserProfile$.next(data)
    this._isProfileCompleted$.next(true);
  }
  selectAuthUserProfile(): Observable<IAuthUserProfile> {
    return this._authUserProfileObs$;
  }

  // is profile completed
  setIsProfileCompleted(val: boolean): void {
    this._isProfileCompleted$.next(val);
  }
  getIsProfileCompleted(): boolean {
    return this._isProfileCompleted$.value;
  }
  selectIsProfileCompleted(): Observable<boolean> {
    return this._isProfileCompletedObs$;
  }

  // firebase data
  setFireBaseUser(val: IFireBaseUser): void {
    this._fireBaseUser$.next(val);
  }
  getFireBaseUser(): IFireBaseUser {
    return this._fireBaseUser$.value;
  }

  getProfile(user: IFireBaseUser): Observable<IAuthUserProfile> {
    if (user) {
      return this._coreHttpService.getProfileData().pipe(
        tap(profile => {
          if (profile && profile.isProfileCompleted) {
            this.setIsProfileCompleted(true);
            this.setAuthUserProfile(profile);
          }
        })
      )
    } else {
      this.clearAuthState();
      return of(null)
    }
  }

  subscribeToFirebaseUser(): Observable<IFireBaseUser> {
    return new Observable(obs => {
      this._angularFireAuth.onAuthStateChanged(
        user => {
          this.setFireBaseUser(user || null);
          this.setIsAuthenticated(Boolean(user));
          obs.next(user);
          obs.complete();
        },
        err => {
          obs.error(err);
          obs.complete();
        }
      );
    })
  }

  // clear state
  clearAuthState(): void {
    this._isAuthenticated$.next(false);
    this._isProfileCompleted$.next(false);
    this._authUserProfile$.next(null);
    this._fireBaseUser$.next(null);
  }
}
