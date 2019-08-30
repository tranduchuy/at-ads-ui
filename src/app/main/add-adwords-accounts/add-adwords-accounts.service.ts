import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

export interface IAddAccount {
  accountId: string;
}

export interface ICheckAccountAcceptanceParams {
  adWordId: string;
}

export interface IGetAdsAccountsParams {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddAdwordsAccountsService {

  constructor(private _http: HttpClient) { }

  public addAdwordsAccount(param: IAddAccount): Observable<any> {
    return this._http.post(API.AdwordsAccount.addAccount, param);
  }

  public getAccounts(): Observable<any> {
    return this._http.get(API.AdwordsAccount.getAccounts);
  }

  public getAdwordsAccountDetail(accountId): Observable<any> {
    const url = API.AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
    return this._http.get(url);
  }

  public checkAccountAcceptance(params: ICheckAccountAcceptanceParams): Observable<any> {
    return this._http.post(API.AdwordsAccount.checkAccountAcceptance, params);
  }

  public getAdsAccounts(params: IGetAdsAccountsParams): Observable<any> {
    let url = API.AdwordsAccount.getAdsAccounts.replace('{accessToken}', params.accessToken);
    url = url.replace('{refreshToken}', params.refreshToken);

    return this._http.get(url);
  }

}
