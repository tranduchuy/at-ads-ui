import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../shared/services/session.service';

export interface IBlockSampleIPParams {
  ip: string;
}

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
  isEnabled: boolean;
}

export interface ICheckAccountAcceptance {
  adWordId: string;
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

  public blockSampleIP(param: IBlockSampleIPParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.blockSampleIP.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public getBlockedSampleIP(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url = API.AdwordsAccount.getBlockedSampleIP.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }

  public unblockSampleIP(param: IBlockSampleIPParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.unblockSampleIP.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public removeBlockedIPs(param: IBlockIPsParams): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url = API.AdwordsAccount.blockIPs.replace('{account_id}', activeAccountId);
    return this._http.post(url, param);
  }

  public getDeviceReport(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url = API.AdwordsAccount.getDeviceReport.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }

  public checkAccountAcceptance(params: ICheckAccountAcceptance): Observable<any> {
    return this._http.post(API.AdwordsAccount.checkAccountAcceptance, params);
  }

  public getBlockedCustomIPs(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url = API.AdwordsAccount.getBlockedCustomIPs.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }

  public getBlockingIPSettings(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url = API.AdwordsAccount.getBlockingIPSettings.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }

  public getAdwordsAccountDetail(accountId): Observable<any> {
    const url = API.AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
    return this._http.get(url);
  }
}
