import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BanIpsService } from 'app/main/ban-ips/ban-ips.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Injectable({
    providedIn: 'root'
})
export class AccountAcceptanceGuardService extends PageBaseComponent implements CanActivate {

    constructor(
        private _router: Router,
        private _sessionService: SessionService,
        private _dialogService: DialogService,
        private _blockIPService: BanIpsService
    ) {
        super();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        let activeAdsAccountId = this._sessionService.activeAdsAccountId.match(/\d+/g).join('');

        if (!activeAdsAccountId) {
            this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản AdWords');
            this._router.navigateByUrl('/them-tai-khoan-moi');
            return false;
        }

        // const sub = this._blockIPService.checkAccountAcceptance({ adWordId: activeAdsAccountId })
        //     .subscribe((error: HttpErrorResponse) => {
        //         if (!error.error.data.isConnected) {
        //             this._dialogService._openInfoDialog('Tài khoản AdWords chưa được chấp nhận quyền quản lý hệ thống');
        //             this._router.navigateByUrl('/them-tai-khoan-moi');
        //             return false;
        //         }
        //     });
        // this.subscriptions.push(sub);

        return true;
    }
}
