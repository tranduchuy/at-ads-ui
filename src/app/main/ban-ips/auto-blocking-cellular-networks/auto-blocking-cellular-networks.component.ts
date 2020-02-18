import { Component, OnInit } from '@angular/core';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { BanIpsService } from '../ban-ips.service';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-auto-blocking-cellular-networks',
  templateUrl: './auto-blocking-cellular-networks.component.html',
  styleUrls: ['./auto-blocking-cellular-networks.component.scss']
})
export class AutoBlockingCellularNetworksComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = true;
  mobileNetworks: any = {
    viettel: false,
    mobifone: false,
    vinafone: false,
    vietnammobile: false,
    fpt: false
  }

  constructor(private _banIpsService: BanIpsService,
    public sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit(): void {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getAccountDetail(accountId);
        }
      });
    this.subscriptions.push(sub);
  }

  getAccountDetail(accountId: string) {
    const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
      .subscribe(
        (res) => {
          if (res.data.adsAccount.isConnected) {
            this.getAutoBlocking3G4GSetting();
          }
          else {
            this._fuseProgressBarService.hide();
            this._dialogService._openInfoDialog(
              'Tài khoản Google Ads này chưa được chấp nhận quyền quản lý hệ thống. Vui lòng thực hiện theo hướng dẫn',
              'tại đây',
              '/tro-giup/fI10j2DfAFexKoOQ'
            );
            this._router.navigateByUrl('/danh-sach-tai-khoan');
          }

        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this._router.navigateByUrl('/danh-sach-tai-khoan');
        }
      );
    this.subscriptions.push(accountDetailSub);
  }

  selectNetwork(event, network: string) {
    if (event.checked)
      this.mobileNetworks[network] = true;
    else this.mobileNetworks[network] = false;
  }

  getAutoBlocking3G4GSetting() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgressBarService.hide();
        this._fuseSplashScreenService.hide();
        this.mobileNetworks = res.data.setting.mobileNetworks;
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();

          if (error.status === 404) {
            this._dialogService._openInfoDialog(
              'Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              'tại đây',
              '/gan-tracking/chien-dich'
            );
          }
          else this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  setAutoBlocking3G4G() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._banIpsService.autoBlocking3G4G(this.mobileNetworks)
      .subscribe((res: ILoginSuccess) => {
        this.getAutoBlocking3G4GSetting();
        setTimeout(() => {
          this._fuseProgressBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

}
