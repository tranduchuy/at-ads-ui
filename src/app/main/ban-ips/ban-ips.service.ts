import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class BanIpsService {

  constructor(private _http: HttpClient) { }

  public autoBlockingRangeIP(param: IAutoBlockingRangeIPParams): Observable<any> {
    const url = API.AdwordsAccount.autoBlockingRangeIP.replace('{account_id}', '6668385722');
    return this._http.post(url, param);
  }

  public autoBlocking3G4G(param: IAutoBlocking3G4GParams): Observable<any> {
    const url = API.AdwordsAccount.autoBlocking3G4G.replace('{account_id}', '6668385722');
    return this._http.post(url, param);
  }

  public blockIPs(param: IBlockIPsParams): Observable<any> {
    const url = API.AdwordsAccount.blockIPs.replace('{account_id}', '5d2d4aaf4b262627049c23e9');
    return this._http.post(url, param);
  }

  public autoBlockingDevice(param: IAutoBlockingDeviceParams): Observable<any> {
    const url = API.AdwordsAccount.autoBlockingDevice.replace('{account_id}', '5d2d4aaf4b262627049c23e9');
    return this._http.post(url, param);
  }

  public autoBlockingIP(param: IAutoBlockingIPParams): Observable<any> {
    const url = API.AdwordsAccount.autoBlockingIP.replace('{account_id}', '5d2d4aaf4b262627049c23e9');
    return this._http.post(url, param);
  }
}
