import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../../environments/environment';

import CookieNames from '../constants/cookies';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChangingListAccountsAction } from 'app/layout/components/toolbar/toolbar.component';

export interface ChagingListAccountsAction {
  status: 'SUCCESS' | 'ERROR' | 'INFO',
  data: any,
  navigatedRoute?: string,
  isNavigationReloaded?: boolean
}

@Injectable()
export class SessionService {
  private _standByUser = new BehaviorSubject<any>(null);
  private _adsId$ = new BehaviorSubject<string>('');
  private _accountId$ = new BehaviorSubject<string>('');
  private _user$ = new BehaviorSubject<any>({});
  private _accountAcceptance$ = new BehaviorSubject<boolean>(true);
  private _acceptedAdsId$ = new BehaviorSubject<string>('');
  private _isListAccountChanged$ = new BehaviorSubject<boolean | ChangingListAccountsAction>(false);
  private _doesUserHaveAccount$ = new BehaviorSubject<boolean>(false);
  private _listAccounts$ = new BehaviorSubject<any>(false);
  private _removedAccountId$ = new BehaviorSubject<string>('');
  private _activeAccountChanged$ = new BehaviorSubject<string>('');
  private _reportTableChanged$ = new BehaviorSubject<number>(0);
  private _doneConfigStep$ = new BehaviorSubject<number>(0);
  private _isNoficationShown$ = new BehaviorSubject<boolean>(false);
  private _activeAccountConnection$ = new BehaviorSubject<string>('');
  private _stepperStepOption$ = new BehaviorSubject<string>('');
  private _userLoginChecker$ = new BehaviorSubject<boolean>(false);
  private _expiredUserConnectsAccount$ = new BehaviorSubject<boolean>(null);

  constructor(
    private cookieService: CookieService
  ) {

  }

  onExpiredUserConnectsAccount(): Observable<boolean> {
    return this._expiredUserConnectsAccount$.asObservable();
  }

  emitSelectedAccountFromExpiredUser(account: any) {
    this._expiredUserConnectsAccount$.next(account);
  }

  getValueOfUserLoginChecker(): boolean {
    return this._userLoginChecker$.getValue();
  }

  setUserLoginChecker(value: boolean) {
    this._userLoginChecker$.next(value);
  }

  getStepperStepOption(): Observable<string> {
    return this._stepperStepOption$.asObservable();
  }

  setStepperStepOption(option: string) {
    this._stepperStepOption$.next(option);
  }

  noticeActiveAccountConnection(value: string) {
    this._activeAccountConnection$.next(value);
  }

  getValueOfActiveAccountConnection(): string {
    return this._activeAccountConnection$.getValue();
  }

  checkNotificationShowing(): Observable<boolean> {
    return this._isNoficationShown$.asObservable();
  }

  allowNoficationToShow(isAllowed: boolean) {
    return this._isNoficationShown$.next(isAllowed);
  }

  onConfigStepCompleted(): Observable<number> {
    return this._doneConfigStep$.asObservable();
  }

  completeConfigStep(step: number) {
    this._doneConfigStep$.next(step);
  }

  getValueOfDoneConfigStep(): number {
    return this._doneConfigStep$.getValue();
  }

  onReportTableChanged(): Observable<any> {
    return this._reportTableChanged$.asObservable();
  }

  emitReportTableChanged(changeOption: number) {
    this._reportTableChanged$.next(changeOption);
  }

  getValueOfReportTableChanged(): number {
    return this._reportTableChanged$.getValue();
  }

  onSelectingActiveAccount(): Observable<string> {
    return this._activeAccountChanged$.asObservable();
  }

  emitSelectedActiveAccount(accountId: string) {
    this._activeAccountChanged$.next(accountId);
  }

  getValueOfSelectedActiveAccount(): string {
    return this._activeAccountChanged$.getValue();
  }

  onRemovingAccount(): Observable<string> {
    return this._removedAccountId$.asObservable();
  }

  completeRemovingAccount(accountId: string) {
    this._removedAccountId$.next(accountId);
  }

  getListAccounts(): Observable<any> {
    return this._listAccounts$.asObservable();
  }

  setListAccounts(listAccounts: any) {
    this._listAccounts$.next(listAccounts);
  }

  getValueOfListAccounts(): any {
    return this._listAccounts$.getValue();
  }

  getValueOfCheckingIfUserHasAccount(): boolean {
    return this._doesUserHaveAccount$.getValue();
  }

  checkIfUserHasAccount(): Observable<boolean> {
    return this._doesUserHaveAccount$.asObservable();
  }

  completeCheckingIfUserHasAccount(userHasAccount: boolean) {
    return this._doesUserHaveAccount$.next(userHasAccount);
  }

  onListAccountsChanged(): Observable<boolean | any> {
    return this._isListAccountChanged$.asObservable();
  }

  notifyListAccountsChanged(action?: ChangingListAccountsAction): void {
    if (action) {
      this._isListAccountChanged$.next(action);
    }
    else this._isListAccountChanged$.next(true);
  }

  resetAllObservables() {
    this._standByUser.next(null);
    this._adsId$.next('');
    this._accountId$.next('');
    this._user$.next({});
    this._accountAcceptance$.next(true);
    this._acceptedAdsId$.next('');
    this._isListAccountChanged$.next(false);
    this._doesUserHaveAccount$.next(true);
    this._listAccounts$.next(false);
    this._removedAccountId$.next('');
    this._activeAccountChanged$.next('');
    this._reportTableChanged$.next(0);
    this._doneConfigStep$.next(0);
    this._isNoficationShown$.next(false);
    this._activeAccountConnection$.next('');
    this._stepperStepOption$.next('');
    this._userLoginChecker$.next(false);
    this._expiredUserConnectsAccount$.next(null);

    this.unsetActiveGoogleAdsAccount();
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

    this.cookieService.put(CookieNames.token, token, { expires: today, domain: environment.cookieDomain });
    this.cookieService.putObject(CookieNames.user, user, { expires: today, domain: environment.cookieDomain });
  }

  setGoogleAccountToken(accessToken: string, refreshToken: string): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.accessToken, accessToken, { expires: today, domain: environment.cookieDomain });
    this.cookieService.put(CookieNames.refreshToken, refreshToken, { expires: today, domain: environment.cookieDomain });
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
    this.cookieService.putObject(CookieNames.user, user, { expires: today, domain: environment.cookieDomain });
    this._user$.next(user);

    if (standByUser) {
      this.cookieService.putObject(CookieNames.standBy, standByUser, {
        expires: today,
        domain: environment.cookieDomain
      });
      this._standByUser.next(standByUser);
    }
  }

  setActiveAccountId(accountId: string): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.activeAccountId, accountId, { expires: today, domain: environment.cookieDomain });
  }

  setActiveAdsAccountId(adsId: string): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.activeAdsAccountId, adsId, { expires: today, domain: environment.cookieDomain });
  }

  remove(): void {
    this.cookieService.remove(CookieNames.token, { domain: environment.cookieDomain });
    this.cookieService.remove(CookieNames.standBy, { domain: environment.cookieDomain });
    this.cookieService.remove(CookieNames.user, { domain: environment.cookieDomain });
    this.cookieService.remove(CookieNames.activeAccountId, { domain: environment.cookieDomain });
    this.cookieService.remove(CookieNames.activeAdsAccountId, { domain: environment.cookieDomain });
    this.cookieService.remove(CookieNames.accessToken, { domain: environment.cookieDomain });
    this.cookieService.remove(CookieNames.refreshToken, { domain: environment.cookieDomain });
  }

  setUserProfile(name: string, phone: string, usePassword: boolean): any {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    const newUser = JSON.parse(this.user);

    newUser.name = name;
    newUser.phone = phone;
    newUser.usePassword = usePassword;

    this.cookieService.put(CookieNames.user, JSON.stringify(newUser), { expires: today, domain: environment.cookieDomain });
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

  public getStandByUser$(): Observable<any> {
    return this._standByUser.asObservable();
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
    this.setActiveAdsAccountId(adsId);
    this.setAccountId(accountId);
    this.setAdwordId(adsId);
  }

  public unsetActiveGoogleAdsAccount(): void {
    this.setActiveAccountId('');
    this.setActiveAdsAccountId('');
    this.setAccountId('');
    this.setAdwordId('');
    this.emitSelectedActiveAccount('');
  }
}
