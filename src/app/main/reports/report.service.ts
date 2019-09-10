import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API } from '../../shared/constants/api.constant';
import { SessionService } from 'app/shared/services/session.service';
import { Observable } from 'rxjs';

export interface IAccountStatisticReportParams {
  from: string;
  to: string;
}

export interface IAccountReportParams {
  from: string;
  to: string;
  page?: number;
  limit?: number;
}

export interface IGetStatisticUserReport {
  startDate: string;
  endDate: string;
  page?: number;
  limit?: number;
}

export interface IDailyClickingReportParams {
  page?: number;
  limit?: number;
}

export interface IClassDClickingReportParams {
  from: string;
  to: string;
  page?: number;
  limit?: number;
}

export interface IRemoveAutoBlockedIPParmas {
  ips: string[];
}

export interface IGetIPHistoryParams {
  ip: string;
  page?: number;
  limit?: number;
}

export interface IGetUserStatisticDetailParams {
  id: string;
  startDate: string;
  endDate: string;
  page?: number;
  limit?: number;
}

export interface IGetBlockedIpListParams {
  page?: number;
  limit?: number;
}

export interface IGetIPClicksListParams {
  ip: string;
}

export interface IGetIPClickDetails {
  ip: string;
  startId: string;
  endId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getAccountStatisticReport(params: IAccountStatisticReportParams, accountId: string): Observable<any> {

    let url = API.Report.getAccountStatisticReport.replace('{account_id}', accountId);
    url = url.replace('{from}', params.from);
    url = url.replace('{to}', params.to);

    return this._http.get(url);
  }

  getAccountReport(params: IAccountReportParams, accountId: string): Observable<any> {

    let url = API.Report.getAccountReport.replace('{account_id}', accountId);
    url = url.replace('{from}', params.from);
    url = url.replace('{to}', params.to);

    if (params.page !== undefined)
      url += `&page=${params.page}`;
    if (params.limit !== undefined)
      url += `&limit=${params.limit}`;

    return this._http.get(url);
  }

  getStatisticUserReport(params: IGetStatisticUserReport, accountId: string): Observable<any> {

    let url = API.Report.getStatisticUserReport.replace('{account_id}', accountId);
    url = url.replace('{from}', params.startDate);
    url = url.replace('{to}', params.endDate);

    if (params.page !== undefined)
      url += `&page=${params.page}`;
    if (params.limit !== undefined)
      url += `&limit=${params.limit}`;

    return this._http.get(url);
  }

  getDailyClickingReport(params: IDailyClickingReportParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getDailyClickingReport.replace('{account_id}', activeAccountId);
    url = url.replace('{page}', params.page.toString());
    url = url.replace('{limit}', params.limit.toString());

    return this._http.get(url);
  }

  getClassDClickingReport(params: IClassDClickingReportParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getClassDClickingReport.replace('{account_id}', activeAccountId);
    url = url.replace('{from}', params.from);
    url = url.replace('{to}', params.to);
    url = url.replace('{page}', params.page.toString());
    url = url.replace('{limit}', params.limit.toString());

    return this._http.get(url);
  }

  getAdwordsAccountDetail(accountId): Observable<any> {
    const url = API.AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
    return this._http.get(url);
  }

  getBlockedIPsListReport(params: IGetBlockedIpListParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getBlockedIPsListReport.replace('{account_id}', activeAccountId);

    if (params.page !== undefined)
      url += `?page=${params.page}`;
    if (params.limit !== undefined)
      url += `&limit=${params.limit}`;

    return this._http.get(url);
  }

  removeAutoBlockedIP(params: IRemoveAutoBlockedIPParmas): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    const url = API.Report.getBlockedIPsListReport.replace('{account_id}', activeAccountId);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: params
    };

    return this._http.delete(url, options);
  }

  getIPHistory(params: IGetIPHistoryParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getIPHistory.replace('{account_id}', activeAccountId);
    url = url.replace('{ip}', params.ip);

    if (params.page !== undefined)
      url += `&page=${params.page}`;
    if (params.limit !== undefined)
      url += `&limit=${params.limit}`;

    return this._http.get(url);
  }

  getUserStatisticDetail(params: IGetUserStatisticDetailParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getUserStatisticDetail.replace('{account_id}', activeAccountId);
    url = url.replace('{id}', params.id);
    url = url.replace('{from}', params.startDate);
    url = url.replace('{to}', params.endDate);

    if (params.page !== undefined)
      url += `&page=${params.page}`;
    if (params.limit !== undefined)
      url += `&limit=${params.limit}`;

    return this._http.get(url);
  }

  getIPClicksList(params: IGetIPClicksListParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getIPClicksList.replace('{account_id}', activeAccountId);
    url = url.replace('{ip}', params.ip);

    return this._http.get(url);
  }

  getIPClickDetails(params: IGetIPClickDetails): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getIPClickDetails.replace('{account_id}', activeAccountId);
    url = url.replace('{ip}', params.ip);

    if (params.startId && params.endId)
      url += `?startId=${params.startId}&endId=${params.endId}`;
    else if (!params.startId && params.endId)
      url += `?endId=${params.endId}`;

    return this._http.get(url);
  }

}
