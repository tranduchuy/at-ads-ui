import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'app/shared/constants/api.constant';

export interface IUpdatePopupConfigParams {
  themeColor: string;
  supporterAvatar: string;
  supporterName: string;
  supporterMajor: string;
}

export interface IEnablePopupDisplay {
  popupStatus: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VisitorToolsService {

  constructor(
    private _http: HttpClient
  ) { }

  updatePopupConfig(params: IUpdatePopupConfigParams, websiteId: string): Observable<any> {
    const url = API.Website.updateWebsiteSendInfoPopupConfig.replace('{website_id}', websiteId);
    return this._http.put(url, params);
  }

  enablePopupDislay(params: IEnablePopupDisplay, websiteId: string): Observable<any> {
    const url = API.Website.enablePopupDisplay.replace('{website_id}', websiteId);
    return this._http.put(url, params);
  }
}
