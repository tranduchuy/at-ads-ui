import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import CookieNames from '../constants/cookies';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SessionService {

  private _adsId$ = new BehaviorSubject<string>('');
  private _accountId$ = new BehaviorSubject<string>('');
  private _user$ = new BehaviorSubject<any>({});
  private _accountAcceptance$ = new BehaviorSubject<boolean>(true);
  private _acceptedAdsId$ = new BehaviorSubject<string>('');
  private _isNewAccountAdded$ = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService) {

  }

  getIsNewAccountAdded(): Observable<boolean> {
    return this._isNewAccountAdded$.asObservable();
  }

  notifyNewAccountWasAdded(): void {
    this._isNewAccountAdded$.next(true);
  }

  getAcceptedAdsId(): Observable<string> {
    return this._acceptedAdsId$.asObservable();
  }

  setAcceptedAdsId(): void {
    this._acceptedAdsId$.next(this.activeAdsAccountId.replace(/\D+/g, ''));
  }

  getAccountAcceptance(): Observable<boolean> {
    return this._accountAcceptance$.asObservable();
  }

  setAccountAcceptance(isAccepted: boolean): void {
    this._accountAcceptance$.next(isAccepted);
  }

  set(token, user): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);

    this.cookieService.put(CookieNames.token, token, { expires: today });
    this.cookieService.putObject(CookieNames.user, user, { expires: today });
  }

  setGoogleAccountToken(accessToken: string, refreshToken: string): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.accessToken, accessToken, { expires: today });
    this.cookieService.put(CookieNames.refreshToken, refreshToken, { expires: today });
  }

  getGoogleAccountToken(): any {
    return {
      accessToken: this.cookieService.get(CookieNames.accessToken),
      refreshToken: this.cookieService.get(CookieNames.refreshToken)
    };
  }

  setLoggedInUser(user, standByUser): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.putObject(CookieNames.user, user, { expires: today });

    if (standByUser) {
      this.cookieService.putObject(CookieNames.standBy, standByUser, { expires: today });
    }
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
    this.cookieService.remove(CookieNames.accessToken);
    this.cookieService.remove(CookieNames.refreshToken);
  }

  setUserProfile(name: string, phone: string, usePassword: boolean): any {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    const newUser = JSON.parse(this.user);

    newUser.name = name;
    newUser.phone = phone;
    newUser.usePassword = usePassword;

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

  get standByUser(): any {
    return this.cookieService.get(CookieNames.standBy);
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

  public setAdwordId(value: string): void {
    this._adsId$.next(value);
  }

  public setAccountId(value: string): void {
    this._accountId$.next(value);
  }

  public setUser(user: any): void {
    this._user$.next(user);
  }

  public getValueOfUser(): any {
    return this._user$.getValue();
  }

  public getValueOfAccountId(): string {
    return this._accountId$.getValue();
  }

  public setActiveGoogleAdsAccount(accountId: string, adsId: string): void {
    this.setActiveAccountId(accountId);
    this.setAccountId(accountId);
    this.setActiveAdsAccountId(adsId);
    this.setAdwordId(adsId);
  }
  public unsetActiveGoogleAdsAccount(): void {
    this.setActiveAdsAccountId('');
    this.setAccountId('');
    this.setActiveAdsAccountId('');
    this.setAdwordId('');
  }
}
