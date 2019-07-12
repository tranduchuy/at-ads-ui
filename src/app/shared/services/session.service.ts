import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import CookieNames from '../constants/cookies';

@Injectable()
export class SessionService {

  public token = '';

  public user: any = null;

  constructor(private cookieService: CookieService) {

  }

  set(token, user): void {
    const today = new Date();
    today.setHours(today.getHours() + 8);

    this.token = token;
    this.user = user;

    this.cookieService.put(CookieNames.token, token, {expires: today});
    this.cookieService.putObject(CookieNames.user, user, {expires: today});
  }

  remove(): void {
    this.token = '';
    this.user = null;
    this.cookieService.remove(CookieNames.token);
    this.cookieService.remove(CookieNames.user);
  }
}
