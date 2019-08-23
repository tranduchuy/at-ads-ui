import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { Router } from '@angular/router';

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
  deviceReports: DeviceReport[];
  isProcessing: boolean = true;
  deviceSettings: any = {
    mobile: false,
    tablet: false,
    computer: false
  };

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
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    public _dialogService: DialogService,
    private _router: Router
  ) {
    super();
    this.deviceReports = [];
  }

  ngOnInit(): void {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(
              (res) => {

                if (res.data.adsAccount.isConnected) {
                  this._fuseProgressiveBarService.hide();
                  this.getDeviceReport();
                }
                else {
                  this._fuseProgressiveBarService.hide();
                  this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                  this._router.navigateByUrl('/danh-sach-tai-khoan');
                }

              },
              (error: HttpErrorResponse) => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this._router.navigateByUrl('/danh-sach-tai-khoan');
              }
            );
          this.subscriptions.push(accountDetailSub);
        }
      });

    this.subscriptions.push(sub);
  }

  getDeviceSettings() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {

        this.deviceSettings = res.data.setting.devices;

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();

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

  getDeviceReport() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.getDeviceReport()
      .subscribe(res => {
        this.deviceReports = res.data.reportDevice;

        // this.deviceReports = [
        //   {
        //     device: 'Điện thoại',
        //     cost: 123,
        //     impressions: 123,
        //     clicks: 123,
        //     avgPosition: 123,
        //     ctr: 123
        //   },
        //   {
        //     device: 'Máy tính bảng',
        //     cost: 123,
        //     impressions: 123,
        //     clicks: 123,
        //     avgPosition: 123,
        //     ctr: 123
        //   },
        //   {
        //     device: 'Máy tính',
        //     cost: 123,
        //     impressions: 123,
        //     clicks: 123,
        //     avgPosition: 123,
        //     ctr: 123
        //   },
        // ];

        this.getDeviceSettings();

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.deviceReports = [];
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  setDeviceCampaignRunning(event, deviceId: number) {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.setDeviceCampaignRunning({ device: deviceId, isEnabled: event.value })
      .subscribe((res: ILoginSuccess) => {

        this.getDeviceSettings();

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

}
