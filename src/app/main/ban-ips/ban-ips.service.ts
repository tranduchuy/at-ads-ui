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
    return this._http.post(API.AdwordsAccount.autoBlockingRangeIP, param);
  }
}
