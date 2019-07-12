import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../constants/api.constant';
import { IAuthLogin } from '../models/i-auth-login';
import { IAuthRegister } from '../models/i-auth-register';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }

  public login(param: IAuthLogin): Observable<any> {
    console.log(API.User.Login);
    return this.httpClient.post(API.User.Login, param);
  }

  public register(param: IAuthRegister): Observable<any> {
    return this.httpClient.post(API.User.Register, param);
  }

  public forgotPassword(data: string): Observable<any>{
    return this.httpClient.post(API.User.ForgotPassword, {}, {
      params: {email: data}
    });
  }

  public resendEmail(data: string): Observable<any>{
    return this.httpClient.post<any>(API.User.ResetPassword, {email: data});
  }

  public resetPassword(password: string): Observable<any>{
    return this.httpClient.post<any>(API.User.ResetPassword, password);
  }

}
