import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountsService } from '../ads-accounts/adwords-accounts.service';
import { map, catchError } from 'rxjs/operators'; import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { Generals } from 'app/shared/constants/generals';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class AccountAcceptanceGuardService extends PageBaseComponent implements CanActivate {

    constructor(
        private _router: Router,
        private _sessionService: SessionService,
        private _adwordsAccountsService: AdwordsAccountsService,
        private _dialogService: DialogService,
        private _fuseSplashScreenService: FuseSplashScreenService
    ) {
        super();
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {

        const listAccounts = this._sessionService.getValueOfListAccounts();
        const activeAccount = _.find(listAccounts, account => account.accountId === this._sessionService.activeAccountId);
        if (!activeAccount) {
            this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản Google Ads');
            this._router.navigateByUrl('/them-tai-khoan-moi');
            return false;
        }
        if (activeAccount && activeAccount.connectType === Generals.AccountConnectionType.byGoogleAdsId)
            return true;

        return this._adwordsAccountsService.getAccountAdwordsDetail(this._sessionService.activeAccountId)
            .pipe(
                map((res: any) => {
                    this._fuseSplashScreenService.hide();
                    const isConnected = res.data.adsAccount.isConnected;
                    const connectType = res.data.adsAccount.connectType;

                    if (route.routeConfig.path.includes('chan-ip')
                        && isConnected === false && connectType === Generals.AccountConnectionType.byGoogleAdsId) {
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        return false;
                    }

                    return true;
                }),
                catchError(() => {
                    this._fuseSplashScreenService.hide();
                    return of(false);
                })
            );
    }
}
