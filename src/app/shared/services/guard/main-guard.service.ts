import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _sessionService: SessionService,
    private _dialogService: DialogService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this._sessionService.token && this._sessionService.user) {
      return true;
    }

    if (!this._sessionService.user || !this._sessionService.token) {

      // if (this._router.url !== '/gioi-thieu' && route.routeConfig.path !== '') {
      //   this._router.navigateByUrl('/auth/login');
      //   this._dialogService._openInfoDialog('Vui lòng đăng nhập tài khoản');
      //   return false;
      // }
      
      this._router.navigateByUrl('/gioi-thieu');

      return false;
    }

  }
}
