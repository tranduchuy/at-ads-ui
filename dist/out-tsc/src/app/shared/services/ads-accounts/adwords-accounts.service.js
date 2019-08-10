import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../constants/api.constant';
let AdwordsAccountsService = class AdwordsAccountsService {
    constructor(_http) {
        this._http = _http;
    }
    getAdwordsAccount() {
        return this._http.get(API.AdwordsAccount.getAccounts);
    }
};
AdwordsAccountsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AdwordsAccountsService);
export { AdwordsAccountsService };
//# sourceMappingURL=adwords-accounts.service.js.map