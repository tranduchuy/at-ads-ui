import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import CookieNames from '../constants/cookies';
import { BehaviorSubject } from 'rxjs';
let SessionService = class SessionService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this._adsId$ = new BehaviorSubject('');
        this._accountId$ = new BehaviorSubject('');
    }
    set(token, user) {
        const today = new Date();
        today.setHours(today.getHours() + 8);
        this.cookieService.put(CookieNames.token, token, { expires: today });
        this.cookieService.putObject(CookieNames.user, user, { expires: today });
    }
    setLoggedInUser(user) {
        const today = new Date();
        today.setHours(today.getHours() + 8);
        this.cookieService.putObject(CookieNames.user, user, { expires: today });
    }
    setActiveAccountId(accountId) {
        const today = new Date();
        today.setHours(today.getHours() + 8);
        this.cookieService.put(CookieNames.activeAccountId, accountId, { expires: today });
    }
    setActiveAdsAccountId(accountId) {
        const today = new Date();
        today.setHours(today.getHours() + 8);
        this.cookieService.put(CookieNames.activeAdsAccountId, accountId, { expires: today });
    }
    remove() {
        this.cookieService.remove(CookieNames.token);
        this.cookieService.remove(CookieNames.user);
        this.cookieService.remove(CookieNames.activeAccountId);
        this.cookieService.remove(CookieNames.activeAdsAccountId);
    }
    get user() {
        return this.cookieService.get(CookieNames.user);
    }
    get activeAccountId() {
        return this.cookieService.get(CookieNames.activeAccountId);
    }
    get activeAdsAccountId() {
        return this.cookieService.get(CookieNames.activeAdsAccountId);
    }
    get token() {
        return this.cookieService.get(CookieNames.token);
    }
    getValueOfAdwordId() {
        return this._adsId$.getValue();
    }
    getAdwordId() {
        return this._adsId$.asObservable();
    }
    setAdwordId(value) {
        this._adsId$.next(value);
    }
    getValueOfAccountId() {
        return this._accountId$.getValue();
    }
    getAccountId() {
        return this._accountId$.asObservable();
    }
    setAccountId(value) {
        this._accountId$.next(value);
    }
};
SessionService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [CookieService])
], SessionService);
export { SessionService };
//# sourceMappingURL=session.service.js.map