import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AddTrackingTagsService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  public getOriginalCampaigns(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAdwordId();
    const url =  API.AdwordsAccount.getOriginalCampaigns.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }
}
