import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdwordsAccountListService {

  constructor(private _http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this._http.get(API.AdwordsAccount.getAccounts);
  }

  getWebsites(accountId: string): Observable<any> {
    const url = API.Website.getWebsites.replace('{accountId}', accountId);
    return this._http.get(url);
  }
  removeWebsite(websiteId: string): Observable<any> {
    const url = API.Website.removeWebsite.replace('{website_id}', websiteId);
    return this._http.delete(url);
  }
}
