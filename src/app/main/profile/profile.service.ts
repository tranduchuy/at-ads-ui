import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../shared/constants/api.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http: HttpClient
  ) { }

  public updateProfile(params): Observable<any> {
    return this._http.put(API.User.updateProfile, params);
  }
}
