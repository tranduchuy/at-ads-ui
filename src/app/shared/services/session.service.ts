import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import CookieNames from '../constants/cookies';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SessionService {

  private _adsId$ = new BehaviorSubject<string>('');
  private _accountId$ = new BehaviorSubject<string>('');
  private _user$ = new BehaviorSubject<any>({});

  constructor(private cookieService: CookieService) {

  }

  set(token, user): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);

    this.cookieService.put(CookieNames.token, token, { expires: today });
    this.cookieService.putObject(CookieNames.user, user, { expires: today });
  }

  setLoggedInUser(user): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.putObject(CookieNames.user, user, { expires: today });
  }

  setActiveAccountId(accountId): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.activeAccountId, accountId, { expires: today });
  }

  setActiveAdsAccountId(accountId): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.activeAdsAccountId, accountId, { expires: today });
  }

  remove(): void {
    this.cookieService.remove(CookieNames.token);
    this.cookieService.remove(CookieNames.user);
    this.cookieService.remove(CookieNames.activeAccountId);
    this.cookieService.remove(CookieNames.activeAdsAccountId);
  }

  setUserProfile(name: string, phone: string): any {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    const newUser = JSON.parse(this.user);

    newUser.name = name;
    newUser.phone = phone;

    this.cookieService.put(CookieNames.user, JSON.stringify(newUser), { expires: today });
  }

  get user(): any {
    return this.cookieService.get(CookieNames.user);
  }
  get activeAccountId(): any {
    return this.cookieService.get(CookieNames.activeAccountId);
  }

  get activeAdsAccountId(): any {
    return this.cookieService.get(CookieNames.activeAdsAccountId);
  }

  get token(): any {
    return this.cookieService.get(CookieNames.token);
  }

  public getValueOfAdwordId(): string {
    return this._adsId$.getValue();
  }

  public getAdwordId(): Observable<string> {
    return this._adsId$.asObservable();
  }

  public getAccountId(): Observable<string> {
    return this._accountId$.asObservable();
  }

  public getUser(): Observable<any> {
    return this._user$.asObservable();
  }

  public setAdwordId(value: string) {
    this._adsId$.next(value);
  }

  public setAccountId(value: string) {
    this._accountId$.next(value);
  }

  public setUser(user: any) {
    this._user$.next(user);
  }

  public getValueOfUser(): any {
    return this._user$.getValue();
  }

  public getValueOfAccountId(): string {
    return this._accountId$.getValue();
  }
}
