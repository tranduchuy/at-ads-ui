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

  getActiveAccountId(): string {
    const activeAccountId = this._sessionService.activeAccountId;
    if (!activeAccountId){
      return null;
    }
    return activeAccountId.toString();
  }

  public getOriginalCampaigns(): Observable<any> {
    const activeAccountId = this.getActiveAccountId();
    const url =  API.AdwordsAccount.getOriginalCampaigns.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }
}
