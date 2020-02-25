import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'app/shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

interface ISendUpgradeLicenceRequestParams {
  packageType: string;
  numOfMonths: any;
}

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

  sendUpgradeLicenceRequest(params: ISendUpgradeLicenceRequestParams): Observable<any> {
    const url = API.User.sendUpgradeLicenceRequest;
    return this._http.post(url, params);
  }
}
