import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {
  constructor(
    public afAuth: AngularFireAuth,
  ) {}

  login(data: {email: string, password: string}): Observable<any> {
    return new Observable(obs => {
      this.afAuth
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          // this.afAuth.app.
          this.afAuth.signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
              // res.user.sdfg
              obs.next(res);
              obs.complete();
              // console.log(res);
            })
            .catch(err => {
              obs.error(err);
              obs.complete();
            });
        })
        .catch(err => {
          console.error(err);
        });
    });
  }
}
