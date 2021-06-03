import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationHttpService {
  constructor(
    public afAuth: AngularFireAuth,
  ) {}

  registration(data: {email: string, password: string}): Observable<any> {
    return new Observable(obs => {
      this.afAuth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(res => {
          obs.next(res);
          obs.complete();
        })
        .catch(err => {
          obs.error(err);
          obs.complete();
        });
    });
  }
}
