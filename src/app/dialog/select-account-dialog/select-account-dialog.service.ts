import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'app/shared/constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class SelectAccountDialogService {

  constructor(
    private _http: HttpClient
  ) { }

  enableSelectedAccount(accountId: string): Observable<any> {
    const url = API.AdwordsAccount.enableExpiredUserAccount.replace('{account_id}', accountId);
    return this._http.put(url, {});
  }
}
