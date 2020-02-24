import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

export interface DeviceReport {
  device: string;
  cost: number;
  impressions: number;
  clicks: number;
  avgPosition: number;
  ctr: number;
}

@Component({
  selector: 'app-ban-device',
  templateUrl: './ban-device.component.html',
  styleUrls: ['./ban-device.component.scss']
})
export class BanDeviceComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['device', 'cost', 'impressions', 'clicks', 'avgPosition', 'ctr', 'optimization'];
  deviceReports: DeviceReport[] = [];
  isProcessing: boolean = true;
  startDate = moment().subtract(1, 'months');
  endDate = moment();
  deviceSettings: any = {
    mobile: false,
    tablet: false,
    computer: false
  };
  onLoadDeviceReport: boolean = true;

  deviceSettingsItemsSource = {
    mobile: [
      {
        text: 'Chạy quảng cáo',
        value: true
      },
      {
        text: 'Dừng quảng cáo',
        value: false
      }
    ],
    tablet: [
      {
        text: 'Chạy quảng cáo',
        value: true
      },
      {
        text: 'Dừng quảng cáo',
        value: false
      }
    ],
    computer: [
      {
        text: 'Chạy quảng cáo',
        value: true
      },
      {
        text: 'Dừng quảng cáo',
        value: false
      }
    ]
  };

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgressBarService: FuseProgressBarService,
    public sessionService: SessionService,
    public dialogService: DialogService,
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
            this.getDeviceReport();
          }
          else {
            this._fuseSplashScreenService.hide();
            this._fuseProgressBarService.hide();
            this.dialogService._openInfoDialog(
              'Tài khoản Google Ads này chưa được chấp nhận quyền quản lý hệ thống. Vui lòng thực hiện theo hướng dẫn sau đây.'
            );
            this._router.navigateByUrl('/tro-giup/fI10j2DfAFexKoOQ');
          }
        },
        (error: HttpErrorResponse) => {
          this._fuseSplashScreenService.hide();
          this._fuseProgressBarService.hide();
          this.dialogService._openErrorDialog(error.error);
          this._router.navigateByUrl('/danh-sach-tai-khoan');
        }
      );
    this.subscriptions.push(accountDetailSub);
  }

  getDeviceSettings() {
    this._fuseProgressBarService.show();
    this.isProcessing = true;
    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this.deviceSettings = res.data.setting.devices;
        this._fuseProgressBarService.hide();
        this._fuseSplashScreenService.hide();
        this.isProcessing = false;
        this.onLoadDeviceReport = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
          this.onLoadDeviceReport = false;

          if (error.status === 404) {
            this.dialogService._openInfoDialog(
              'Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              'tại đây',
              '/gan-tracking/chien-dich'
            );
          }
          else this.dialogService._openErrorDialog(error.error);

        });
    this.subscriptions.push(sub);
  }

  getDeviceReport() {
    this._fuseProgressBarService.show();
    const sub = this._banIpsService.getDeviceReport()
      .subscribe(res => {
        this.deviceReports = res.data.reportDevice;
        // this.deviceReports = [
        //   {
        //     avgPosition: null,
        //     clicks: 326,
        //     cost: 4343464.627782,
        //     ctr: 0.055,
        //     device: "Máy tính",
        //     impressions: 5962
        //   },
        //   {
        //     avgPosition: null,
        //     clicks: 326,
        //     cost: 4343464.627782,
        //     ctr: 0.055,
        //     device: "Điện thoại",
        //     impressions: 5962
        //   },
        //   {
        //     avgPosition: null,
        //     clicks: 326,
        //     cost: 4343464.627782,
        //     ctr: 0.055,
        //     device: "Máy tính bảng",
        //     impressions: 5962
        //   }
        // ];
        this.getDeviceSettings();
      },
        (error: HttpErrorResponse) => {
          this._fuseSplashScreenService.hide();
          this._fuseProgressBarService.hide();
          this.dialogService._openErrorDialog(error.error);
          this.deviceReports = [];
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  setDeviceCampaignRunning(event, deviceId: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._banIpsService.setDeviceCampaignRunning({ device: deviceId, isEnabled: event.value })
      .subscribe((res: ILoginSuccess) => {
        this._fuseProgressBarService.hide();
        this.dialogService._openSuccessDialog(res);
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this.dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

}
