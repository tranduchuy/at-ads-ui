import { Injectable } from '@angular/core';
import { API } from '../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private _http: HttpClient) { }

  saveFirebaseToken(fireBaseToken: string): Observable<any> {
    return this._http.post(API.Homepage.saveFirebaseToken, { fireBaseToken });
  }

  get30FirstIPLogs(): Observable<any> {
    return this._http.get(API.Homepage.get30FirstIPLogs);
  }
}
