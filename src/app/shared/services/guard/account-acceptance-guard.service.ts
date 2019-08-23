import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountsService } from '../ads-accounts/adwords-accounts.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AccountAcceptanceGuardService extends PageBaseComponent implements CanActivate {

    constructor(
        private _router: Router,
        private _sessionService: SessionService,
        private adwordsAccountService: AdwordsAccountsService,
        private _dialogService: DialogService,
    ) {
        super();
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {

        let activeAdsAccountId = this._sessionService.activeAdsAccountId;

        if (!activeAdsAccountId) {
            this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản Google Ads');
            this._router.navigateByUrl('/them-tai-khoan-moi');
            return false;
        }

        activeAdsAccountId = activeAdsAccountId.match(/\d+/g).join('');
        let activeAccountId = this._sessionService.activeAccountId;

        // if (route.params.accountId !== undefined)
        //     return this.adwordsAccountService.getAccountAdwordsDetail(route.params.accountId)
        //         .pipe(
        //             map((res: any) => {

        //                 if (route.routeConfig.path.includes('quan-ly-website') && res.data.campaignNumber !== undefined && res.data.campaignNumber === 0) {
        //                     this._dialogService._openErrorDialog({ messages: ['Tài khoản hiện chưa được thêm chiến dịch.'] });
        //                     this._router.navigateByUrl('/danh-sach-tai-khoan');
        //                     return false;
        //                 }

        //                 const isConnected = res.data.adsAccount.isConnected;
        //                 if (!isConnected)
        //                     this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
        //                 return isConnected;
        //             }),
        //             catchError(err => {
        //                 this._router.navigateByUrl('/danh-sach-tai-khoan');
        //                 return throwError(err);
        //             })
        //         );

        return this.adwordsAccountService.getAccountAdwordsDetail(activeAccountId)
            .pipe(
                map((res: any) => {
                    const isConnected = res.data.adsAccount.isConnected;

                    if (route.routeConfig.path.includes('chan-ip') && isConnected === false) {
                        this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                        this._router.navigateByUrl('/danh-sach-tai-khoan');
                        return false;
                    }

                    return true;
                }),
                catchError(() => {
                    return of(null);
                })
            );
    }
}
