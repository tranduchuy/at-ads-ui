import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-auto-ban-ip',
  templateUrl: './auto-ban-ip.component.html',
  styleUrls: ['./auto-ban-ip.component.scss']
})
export class AutoBanIPComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = true;
  selectedMaxClick: number;
  selectedMaxClickHours: number;
  selectedAutoRemove: number;
  checked: boolean;

  itemsSource = {
    maxClick: [
      {
        text: 'Không kích hoạt',
        value: -1
      },
      {
        text: '1 lần',
        value: 1
      },
      {
        text: '2 lần (được đề nghị)',
        value: 2
      },
      {
        text: '3 lần',
        value: 3
      },
      {
        text: '4 lần',
        value: 4
      }
    ],
    maxClickHours: [
      {
        text: '5 phút',
        value: 5
      },
      {
        text: '30 phút',
        value: 30
      },
      {
        text: '60 phút',
        value: 60
      },
      {
        text: '180 phút',
        value: 180
      },
    ],
    autoRemove: [
      {
        text: 'Không xóa (được đề nghị)',
        value: 1
      },
      {
        text: 'Cho phép xóa',
        value: 2
      },
    ]
  };

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgresBarService: FuseProgressBarService,
    public sessionService: SessionService,
    private _dialogService: DialogService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit(): void {
    this.isProcessing = true;
    this._fuseProgresBarService.show();
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
            this._fuseProgresBarService.hide();
            this.getBlockingIPSettting();
          }
          else {
            this._fuseProgresBarService.hide();
            this._dialogService._openInfoDialog(
              'Tài khoản Google Ads này chưa được chấp nhận quyền quản lý hệ thống. Vui lòng thực hiện theo hướng dẫn sau đây.'
            );
            this._router.navigateByUrl('/tro-giup/fI10j2DfAFexKoOQ');
          }

        },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this._router.navigateByUrl('/danh-sach-tai-khoan');
        }
      );
    this.subscriptions.push(accountDetailSub);
  }

  getBlockingIPSettting() {
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    const getSettingsSub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this.checked = res.data.setting.autoBlockWithAiAndBigData;
        this.selectedMaxClick = res.data.setting.autoBlockByMaxClick || 2;
        this.selectedMaxClickHours = res.data.setting.countMaxClickInHours || 60;
        this.selectedAutoRemove = res.data.setting.autoRemoveBlocking === false ? 1 : 2;

        this.isProcessing = false;
        this._fuseProgresBarService.hide();
        this._fuseSplashScreenService.hide();
      },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();
          this._fuseSplashScreenService.hide();

          if (error.status === 404) {
            this._dialogService._openInfoDialog(
              'Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              'tại đây',
              '/gan-tracking/chien-dich'
            );
          }
          else this._dialogService._openErrorDialog(error.error);

          //hide all options
          this.checked = false;
          this.selectedMaxClick = -2;
          this.selectedMaxClickHours = -1;
          this.selectedAutoRemove = -1;
        });
    this.subscriptions.push(getSettingsSub);
  }

  checkSetting(e) {
    this.checked = e.checked;
  }

  setAutoBlockingIP() {
    const params = this.generateAutoBlockingIpParams();
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    const sub = this._banIpsService.autoBlockingIP(params).subscribe((res: ILoginSuccess) => {
      this.getBlockingIPSettting();
      setTimeout(() => {
        this._dialogService._openSuccessDialog(res);
        this._fuseProgresBarService.hide();
        this.isProcessing = false;
      }, 0);
    },
      (error: HttpErrorResponse) => {

        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }

        this._fuseProgresBarService.hide();
        this.isProcessing = false;
      }
    );
    this.subscriptions.push(sub);
  }

  private generateAutoBlockingIpParams(): any {
    const params = {
      maxClick: this.selectedMaxClick,
      autoRemove: this.selectedAutoRemove === 1 ? false : true,
      autoBlockWithAiAndBigData: this.checked,
      countMaxClickInHours: this.selectedMaxClickHours
    };

    return params;
  }
}
