
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import HttpCode from '../constants/http_code';
import { SessionService } from './session.service';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { FuseSplashScreenService } from '../../../@fuse/services/splash-screen.service';
import { DialogService } from './dialog.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _router: Router,
              private  _sessionService: SessionService,
              private _fuseProgressiveBarService: FuseProgressBarService,
              private _dialogService: DialogService,
              private _fuseSplashScreenService: FuseSplashScreenService) {
  }

  private _isUrlApi(url: string): boolean {
    return url.indexOf(environment.hostApi) !== -1;
  }

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._isUrlApi(request.url)) {
      // modify request
      request = request.clone({
        setHeaders: {
          accessToken: this._sessionService.token
        }
      });

      return next.handle(request).pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              if (event.body.status === HttpCode.UNAUTHORIZED) {
                this._router.navigate(['auth/login']);
              }
            }
          },
          error => {
            // http response status code
            if (error.status === HttpCode.UNAUTHORIZED) {
              this._router.navigate(['auth/login']);
            }
          }
        )
      );
    }
    return next.handle(request);
  }
}
