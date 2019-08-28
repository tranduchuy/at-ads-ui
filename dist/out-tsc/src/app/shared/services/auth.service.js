import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constants/api.constant';
let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(param) {
        return this.httpClient.post(API.User.Login, param);
    }
    register(param) {
        return this.httpClient.post(API.User.Register, param);
    }
    forgotPassword(data) {
        return this.httpClient.post(API.User.ForgotPassword, { email: data });
    }
    resendEmail(email) {
        return this.httpClient.post(API.User.ResendEmail, { email });
    }
    resetPassword(data) {
        return this.httpClient.post(API.User.ResetPassword, data);
    }
    loginByGoogle(user) {
        return this.httpClient.post(API.User.LoginByGoogle, user);
    }
    getLoggedInInfo() {
        return this.httpClient.get(API.User.getLoggedInInfo);
    }
    confirmEmail(param) {
        return this.httpClient.post(API.User.confirmEmail, param);
    }
    saveFirebaseToken(firebaseToken) {
        return this.httpClient.post(API.User.saveFirebaseToken, firebaseToken);
    }
};
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map