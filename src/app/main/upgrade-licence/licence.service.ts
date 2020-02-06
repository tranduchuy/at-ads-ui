import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'app/shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(
    private _http: HttpClient
  ) { }

  getPackages(): Observable<any> {
    const url = API.Licence.getPackages;
    return this._http.get(url);
  }
}
