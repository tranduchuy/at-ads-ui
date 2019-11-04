import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

export interface AddWebsiteParams {
  domain: string;
  accountId: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebsiteManagementService {

  constructor(private _http: HttpClient) { }

  getAdwordsAccounts(): Observable<any> {
    return this._http.get(API.AdwordsAccount.getAccounts);
  }

  removeWebsite(websiteId: string): Observable<any> {
    const url = API.Website.removeWebsite.replace('{website_id}', websiteId);
    return this._http.delete(url);
  }

  getWebsites(accountId: string): Observable<any> {
    const url = API.Website.getWebsites.replace('{accountId}', accountId);
    return this._http.get(url);
  }

  addWebsite(params: AddWebsiteParams): Observable<any> {
    return this._http.post(API.Website.addWebsite, params);
  }

  getWebsiteTrackingInfo(accountId: string): Observable<any> {
    const url = API.Website.getWebsiteTrackingInfo.replace('{account_id}', accountId);
    return this._http.get(url);
  }

  getAdwordsAccountDetail(accountId: string): Observable<any> {
    const url = API.AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
    return this._http.get(url);
  }
}
