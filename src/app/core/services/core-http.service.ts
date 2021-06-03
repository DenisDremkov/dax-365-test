import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAuthUserProfile } from '../interfaces/auth-user-profile.interface';
  
@Injectable()
export class CoreHttpService {

  constructor(
    private _angularFireFunctions: AngularFireFunctions,
  ) {}

  getProfileData(): Observable<IAuthUserProfile> {
    return this._angularFireFunctions.httpsCallable('getProfileData')({}).pipe(map(r => r[0]));
  }
}
