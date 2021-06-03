import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthUserStateService } from './core/services/auth-user-state.service';

@Injectable({ providedIn: 'root' })

export class AppInitializerService {

  constructor(
    private _authUserStateService: AuthUserStateService,
  ) {}

  async initialization(): Promise<void> {
    await this._initUser();
    return Promise.resolve();
  }

  private _initUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._authUserStateService.subscribeToFirebaseUser()
        .pipe(
          catchError(err => {
            reject(err);
            return throwError(err);
          }),
          switchMap(user => this._authUserStateService.getProfile(user)),
        )
        .subscribe(() => {
          resolve();
        })
    })
  }
}

export function startupServiceFactory(appInitService: AppInitializerService) {
  return (): Promise<void> => appInitService.initialization();
}
