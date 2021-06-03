import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

import { Observable } from 'rxjs';

interface ICompleteProfilePayload {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable()
export class CompleteProfileHttpService {
  
  constructor(
    private _angularFireFunctions: AngularFireFunctions,
  ) {}

  completeProfile(data: ICompleteProfilePayload): Observable<any> {
      return this._angularFireFunctions.httpsCallable('completeProfile')(data);
  }
}
