import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountsService } from '../ads-accounts/adwords-accounts.service';
import { map, catchError, take } from 'rxjs/operators'; import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
;

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

        if(!this._sessionService.activeAccountId) {
            this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản Google Ads');
            this._router.navigateByUrl('/them-tai-khoan-moi');
            return false;
        }

        return this._adwordsAccountsService.getAccountAdwordsDetail(this._sessionService.activeAccountId)
            .pipe(
                map((res: any) => {
                    this._fuseSplashScreenService.hide();
                    const isConnected = res.data.adsAccount.isConnected;
                    const connectType = res.data.adsAccount.connectType;

                    if (route.routeConfig.path.includes('chan-ip') && isConnected === false && connectType === 'GOOGLE_ADS_ID') {
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
