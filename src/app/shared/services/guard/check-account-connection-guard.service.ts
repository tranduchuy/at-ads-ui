import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountsService } from '../ads-accounts/adwords-accounts.service';
import { map, catchError, flatMap, mergeAll, take } from 'rxjs/operators'; import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
;

@Injectable({
    providedIn: 'root'
})
export class CheckAccountConnectionGuardService extends PageBaseComponent implements CanActivate {

    constructor(
        private _router: Router,
        private _sessionService: SessionService,
        private _dialogService: DialogService,
        private _adwordsAccountsService: AdwordsAccountsService,
        private _fuseSplashScreenService: FuseSplashScreenService
    ) {
        super();
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {

        return true;

        // return this._sessionService.getAccountId()
        //     .pipe(
        //         flatMap((accountId: string) => {
        //             return this._adwordsAccountsService.getAccountAdwordsDetail(accountId)
        //                 .pipe(
        //                     map((res: any) => {
        //                         this._fuseSplashScreenService.hide();
        //                         const isConnected = res.data.adsAccount.isConnected;
        //                         const connectType = res.data.adsAccount.connectType;

        //                         if (route.routeConfig.path.includes('chan-ip') && isConnected === false && connectType === 'GOOGLE_ADS_ID') {
        //                             this._router.navigateByUrl('/danh-sach-tai-khoan');
        //                             this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
        //                             return false;
        //                         }

        //                         return true;
        //                     })
        //                 );
        //         }),
        //         catchError(err => {
        //             console.error(err);
        //             this._fuseSplashScreenService.hide();
        //             this._router.navigateByUrl('/them-tai-khoan-moi');
        //             return of(null);
        //         })
        //     );
    }
}
