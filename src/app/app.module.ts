import { Injector, NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { environment } from '../environments/environment';
import { LoginModule } from './authentication/login/login.module';
import { RegisterModule } from './authentication/register/register.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';
import { DialogModule } from './dialog/dialog.module';
import { AuthService } from './shared/services/auth.service';
import { DialogService } from './shared/services/dialog.service';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './shared/services/token-interceptor.service';
import { SessionService } from './shared/services/session.service';
import { CookieModule, CookieOptionsProvider, CookieService } from 'ngx-cookie';
import { ValidatorsService } from './shared/services/validator.service';
import { ServiceLocator } from './shared/services/service-locator';
import { AppInitService } from './shared/services/app-init.service';
import { MailConfirmModule } from './authentication/mail-confirm/mail-confirm.module';
import { AccountConfirmModule } from './authentication/account-confirm/account-confirm.module';
import { ResendEmailModule } from './authentication/resend-email/resend-email.module';
import { CheckWebsiteTrackingDialogComponent } from './main/add-tracking-tags/check-website-tracking-dialog/check-website-tracking-dialog.component';
import { MatTableModule } from '@angular/material';
import { LogoutModule } from './authentication/logout/logout.module';
import { HomepageModule } from './homepage/homepage.module';
import { ImageDialogComponent } from './dialog/image-dialog/image-dialog.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.hostApi + '/WEB_HOMEPAGE',
  options: {}
};

export function init_app(appInitService: AppInitService): any {
  return () => {
    appInitService.initializeApp();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CheckWebsiteTrackingDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // Dialog
    DialogModule,

    // App modules
    LayoutModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    SampleModule,
    MailConfirmModule,
    AccountConfirmModule,
    ResendEmailModule,
    LogoutModule,
    HomepageModule,

    MatTableModule,

    AppRoutingModule,

    // Cookie

    CookieModule.forRoot(),
  ],
  entryComponents: [
    CheckWebsiteTrackingDialogComponent,
    ImageDialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    DialogService,
    SessionService,
    ValidatorsService,
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppInitService], multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
