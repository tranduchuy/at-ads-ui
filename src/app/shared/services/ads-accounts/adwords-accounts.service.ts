import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../../constants/api.constant';
import { SessionService } from '../session.service';

export interface IUpdateAccountConfigStepParams {
  step: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdwordsAccountsService {
  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  public getAdwordsAccount(): Observable<any> {
    return this._http.get(API.AdwordsAccount.getAccounts);
  }

  public getAccountAdwordsDetail(accountId: string): Observable<any> {
    const url = API.AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
    return this._http.get(url);
  }

  public updateAccountConfigStep(params: IUpdateAccountConfigStepParams): Observable<any> {
    const url = API.AdwordsAccount.updateAccountConfigStep.replace('{account_id}', this._sessionService.activeAccountId);
    return this._http.put(url, params);
  }
}
