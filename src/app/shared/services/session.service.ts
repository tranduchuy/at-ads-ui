import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import CookieNames from '../constants/cookies';

@Injectable()
export class SessionService {

  constructor(private cookieService: CookieService) {

  }

  set(token, user): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);

    this.cookieService.put(CookieNames.token, token, {expires: today});
    this.cookieService.putObject(CookieNames.user, user, {expires: today});
  }

  setLoggedInUser(user): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.putObject(CookieNames.user, user, {expires: today});
  }

  setActiveAccountId(accountId): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.activeAccountId, accountId, {expires: today});
  }

  setActiveAdsAccountId(accountId): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);
    this.cookieService.put(CookieNames.activeAdsAccountId, accountId, {expires: today});
  }

  remove(): void {
    this.cookieService.remove(CookieNames.token);
    this.cookieService.remove(CookieNames.user);
    this.cookieService.remove(CookieNames.activeAccountId);
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
}
