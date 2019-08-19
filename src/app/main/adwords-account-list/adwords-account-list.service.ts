import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

export interface ICheckAccountAcceptanceParams {
  adWordId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdwordsAccountListService {

  constructor(private _http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this._http.get(API.AdwordsAccount.getAccounts);
  }

  removeAccount(accountId: string): Observable<any> {
    const url = API.AdwordsAccount.removeAccount.replace('{account_id}', accountId);
    return this._http.delete(url);
  }

  getWebsites(accountId: string): Observable<any> {
    const url = API.Website.getWebsites.replace('{accountId}', accountId);
    return this._http.get(url);
  }

  removeWebsite(websiteId: string): Observable<any> {
    const url = API.Website.removeWebsite.replace('{website_id}', websiteId);
    return this._http.delete(url);
  }

  checkAccountAcceptance(params: ICheckAccountAcceptanceParams): Observable<any> {
    return this._http.post(API.AdwordsAccount.checkAccountAcceptance, params);
  }
}
