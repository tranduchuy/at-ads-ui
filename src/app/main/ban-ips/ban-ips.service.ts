import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanIpsService {

  constructor(private _http: HttpClient) { }

  public autoBlockingRangeIP(param): Observable<any> {
    const url =  API.AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', '6668385722');
    return this._http.post(url, param);
  }

  public autoBlocking3G4G(param): Observable<any> {
    const url =  API.AdwordsAccount.autoBlocking3G4G.replace('{account_id}', '6668385722');
    return this._http.post(url, param);
  }
}
