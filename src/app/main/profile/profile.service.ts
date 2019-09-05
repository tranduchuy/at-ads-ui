import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../shared/constants/api.constant';
import { Observable } from 'rxjs';

export interface IGetActionHistoryParams {
  page?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http: HttpClient
  ) { }

  public updateProfile(params): Observable<any> {
    return this._http.put(API.User.updateProfile, params);
  }

  public getActionHistory(params: IGetActionHistoryParams): Observable<any> {
    let url = API.User.getActionHistory.replace('{page}', params.page.toString());
    url = url.replace('{limit}', params.limit.toString());
    
    return this._http.get(url);
  }

}
