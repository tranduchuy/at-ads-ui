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
    const url =  API.AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', '5406435113');
    return this._http.post(url, param);
  }

  public blockIPs(param): Observable<any>{
    const url = API.AdwordsAccount.blockIPs.replace('{account_id}', '5406435113');
    return this._http.post(url, param);
  }
}
