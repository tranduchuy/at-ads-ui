import { Injectable } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { API } from '../shared/constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private _http: HttpClient) { }

  saveFirebaseToken(fireBaseToken: string): Observable<any> {
    return this._http.post(API.Homepage.saveFirebaseToken, { fireBaseToken });
  }
}
