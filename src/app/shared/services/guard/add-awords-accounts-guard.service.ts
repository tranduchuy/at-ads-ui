import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddAwordsAccountsGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _sessionService: SessionService,
    private _dialogService: DialogService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    const userLicenceType = JSON.parse(this._sessionService.user).licence.type;

    if (userLicenceType !== 'FREE' && userLicenceType !== 'VIP1')
      return true;

    return this._sessionService.checkIfUserHasAccount()
      .pipe(
        map((userHasAccount: boolean) => {
          if (userHasAccount) {
            this._dialogService._openInfoDialog(
              'Số  lượng tài khoản Google Ads được phép kết nối đã hết. Vui lòng nâng cấp thêm',
              'tại đây',
              '/nang-cap-vip'
            );
            this._router.navigateByUrl('/danh-sach-tai-khoan');
            return false;
          }
          else return true;
        }),
        catchError(() => {
          return of(false);
        })
      );
  }
}
