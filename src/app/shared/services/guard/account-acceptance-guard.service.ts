import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, TimeoutError } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { API } from '../../constants/api.constant';
import { HttpClient } from '@angular/common/http';
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
        private _http: HttpClient,
        private _blockIPService: BanIpsService
    ) {
        super();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const sub1 = this._sessionService.getAdwordId()
            .subscribe((adsId: string) => {
                if (adsId) {
                    const sub2 = this._blockIPService.checkAccountAcceptance({ adWordId: adsId })
                        .subscribe(res => {
                            if (!res.data.isConnected) {
                                this._dialogService._openInfoDialog('Tài khoản AdWords chưa được chấp nhận quyền quản lý hệ thống');
                                this._router.navigateByUrl('/');
                                return false;
                            }
                        });
                    this.subscriptions.push(sub2);
                } else {
                    this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản AdWords');
                    this._router.navigateByUrl('/');
                    return false;
                }
            });
        this.subscriptions.push(sub1);
        return true;
    }
}
