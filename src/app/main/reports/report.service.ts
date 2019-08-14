import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../shared/constants/api.constant';
import { SessionService } from 'app/shared/services/session.service';
import { Observable } from 'rxjs';

export interface IAccountReportParams {
  from: string;
  to: string;
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

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getAccountReport(params: IAccountReportParams, accountId: string): Observable<any> {
    let url = API.Report.getAccountReport.replace('{account_id}', accountId);
    url = url.replace('{from}', params.from);
    url = url.replace('{to}', params.to);

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

}
