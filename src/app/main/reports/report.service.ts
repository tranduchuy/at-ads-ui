import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../shared/constants/api.constant';
import { SessionService } from 'app/shared/services/session.service';
import { Observable } from 'rxjs';

export interface IAccountReportParams {
  from: string;
  to: string;
}

export interface IDailyClickingReport {
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

  getAccountReport(params: IAccountReportParams): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getAccountReport.replace('{account_id}', activeAccountId);
    url = url.replace('{from}', params.from);
    url = url.replace('{to}', params.to);

    return this._http.get(url);
  }

  getDailyClickingReport(params: IDailyClickingReport): Observable<any> {
    const activeAccountId = this._sessionService.getValueOfAccountId();
    let url = API.Report.getDailyClickingReport.replace('{account_id}', activeAccountId);
    url = url.replace('{page}', params.page.toString());
    url = url.replace('{limit}', params.limit.toString());

    return this._http.get(url);
  }

}