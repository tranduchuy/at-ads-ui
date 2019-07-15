import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SessionService } from './session.service';
import { ISuccess } from '../../dialog/models/i-success';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { PageBaseComponent } from '../components/base/page-base.component';
import { DialogService } from './dialog.service';

@Injectable()
export class AppInitService extends PageBaseComponent {

  constructor(private _httpClient: HttpClient,
              private _sessionService: SessionService,
              private _dialogService: DialogService,
              private _fuseProgressiveBarService: FuseProgressBarService,
              private _authService: AuthService) {
    super();
  }

  initializeApp(): Promise<any> {
    return new Promise((resolve) => {
      this.checkLoggedInUserToken();
      resolve();
    });
  }

  checkLoggedInUserToken(): void{
    const sub = this._authService.getLoggedInInfo()
      .subscribe((res: ISuccess) => {
          const user = res.data.user;
          this._sessionService.setLoggedInUser(user);
        },
        (error: HttpErrorResponse) => {
          this._sessionService.remove();
        }
      );
    this.subscriptions.push(sub);
  }
}
