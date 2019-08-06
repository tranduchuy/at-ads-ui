import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../shared/services/session.service';

export interface IAddCampaignTrackingParams {
  campaignIds: string[];
}

export interface ICheckAccountAcceptance{
  adWordId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddTrackingTagsService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  public getOriginalCampaigns(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url =  API.AdwordsAccount.getOriginalCampaigns.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }

  public addCampaignTracking(params: IAddCampaignTrackingParams): Observable<any> {
    const activeAccountId = this._sessionService.activeAccountId;
    const url = API.AdwordsAccount.addCampaignTracking.replace('{account_id}', activeAccountId);
    return this._http.post(url, params);
  }

  public checkAccountAcceptance(params: ICheckAccountAcceptance): Observable<any>{
    return this._http.post(API.AdwordsAccount.checkAccountAcceptance, params);
  }

  public getWebsiteTrackingInfo(): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url =  API.Website.getWebsiteTrackingInfo.replace('{account_id}', activeAccountId);
    return this._http.get(url);
  }
  
}
