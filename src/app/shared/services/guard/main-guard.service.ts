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

    this._router.navigateByUrl('/gioi-thieu');
    return false;
  }
}
