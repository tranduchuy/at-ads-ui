import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { map } from 'rxjs/operators';
import { Generals } from 'app/shared/constants/generals';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConfigStepGuardService extends PageBaseComponent implements CanActivate {

  constructor(
    private _router: Router,
    private _sessionService: SessionService,
    private _dialogService: DialogService
  ) {
    super();
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {

    return true;
  }
}
