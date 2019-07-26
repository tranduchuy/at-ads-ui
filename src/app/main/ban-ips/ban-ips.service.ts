import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../shared/services/session.service';

export interface IBlockIPsParams {
  action: string;
  ips: string[];
}

export interface IAutoBlockingRangeIPParams {
  classC: boolean;
  classD: boolean;
}

export interface IAutoBlockingIPParams {
  maxClick: number;
  autoRemove: boolean;
}

export interface IAutoBlocking3G4GParams {
  vinafone: boolean;
  mobifone: boolean;
  viettel: boolean;
  vietnammobile: boolean;
}

export interface IAutoBlockingDeviceParams {
  mobile: boolean;
  tablet: boolean;
  pc: boolean;
}

export interface ISetDeviceCampaignRunningParams {
  device: number;
  isEnable: boolean;
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
    if (!activeAccountId) {
      return null;
    }
    return activeAccountId.toString();
  }

  public autoBlockingRangeIP(param: IAutoBlockingRangeIPParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public autoBlocking3G4G(param: IAutoBlocking3G4GParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.autoBlocking3G4G.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public autoBlockingDevice(param: IAutoBlockingDeviceParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.autoBlockingDevice.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public autoBlockingIP(param: IAutoBlockingIPParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.autoBlockingIP.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public setDeviceCampaignRunning(param: ISetDeviceCampaignRunningParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.setDeviceCampaignRunning.replace('{account_id}', activeAccountId);
    return this._http.put(url, param);
  }

  public blockIPs(param: IBlockIPsParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public getDeviceReport(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAdwordId();
    const url = API.AdwordsAccount.getDeviceReport.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }
}
