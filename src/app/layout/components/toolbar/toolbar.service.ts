import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'app/shared/services/session.service';

export interface ICheckAccountAcceptanceParams {
  adWordId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  checkAccountAcceptance(): Observable<any> {
    const adWordId = this._sessionService.getValueOfAdwordId().replace(/\D/g, '');
    return this._http.post(API.AdwordsAccount.checkAccountAcceptance, { adWordId });
  }
}
