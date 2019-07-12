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

  remove(): void {
    this.cookieService.remove(CookieNames.token);
    this.cookieService.remove(CookieNames.user);
  }

  get user(): any {
    return this.cookieService.get(CookieNames.user);
  }

  get token(): any {
    return this.cookieService.get(CookieNames.token);
  }
}
