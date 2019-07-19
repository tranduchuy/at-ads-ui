import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../shared/services/session.service';


export interface IAutoBlockingRangeIPParams {
  classC: boolean;
  classD: boolean;
}

export interface IAutoBlocking3G4GParams {
  vinafone: boolean;
  mobifone: boolean;
  viettel: boolean;
  vietnammobile: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BanIpsService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getActiveAccountId(): string {
    const activeAccountId = this._sessionService.activeAccountId;
    if (!activeAccountId){
      return null;
    }
    return activeAccountId.toString();
  }

  public autoBlockingRangeIP(param: IAutoBlockingRangeIPParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url =  API.AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public autoBlocking3G4G(param: IAutoBlocking3G4GParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url =  API.AdwordsAccount.autoBlocking3G4G.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public blockIPs(param): Observable<any>{
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }
}
