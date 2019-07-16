import { Injectable } from '@angular/core';
import { IAuthLogin } from '../../shared/models/i-auth-login';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';

export interface IAddAccount {
  accountId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddAdwordsAccountsService {

  constructor(private _http: HttpClient) { }

  public addAdwordsAccount(param: IAddAccount): Observable<any> {
    return this._http.post(API.AdwordsAccount.addAccount, param);
  }
}
