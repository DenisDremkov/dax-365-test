import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthHttpService {
  constructor(private _http: HttpClient) {}

  login(data: {username: string, password: string}): Observable<any> {
    return this._http.post<any>('url', data);
  }

  login(data: {username: string, password: string}): Observable<any> {
    return this._http.post<any>('url', data);
  }
}
