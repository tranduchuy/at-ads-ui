import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { SessionService } from './session.service';
import { ISuccess } from '../../dialog/models/i-success';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from './dialog.service';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class AppInitService {

  constructor(private _httpClient: HttpClient,
              private _sessionService: SessionService,
              private _socket: Socket,
              private _dialogService: DialogService,
              private _fuseProgressiveBarService: FuseProgressBarService,
              private _authService: AuthService) {
  }

  initializeApp(): Promise<any> {
    return new Promise((resolve) => {
      this.checkLoggedInUserToken();
      resolve();
    });
  }

  checkLoggedInUserToken(): void{
    this._authService.getLoggedInInfo()
      .subscribe((res: ISuccess) => {
          const user = res.data.user;
          this._sessionService.setLoggedInUser(user);
        },
        (error: HttpErrorResponse) => {
          this._sessionService.remove();
        }
      );
  }
}
