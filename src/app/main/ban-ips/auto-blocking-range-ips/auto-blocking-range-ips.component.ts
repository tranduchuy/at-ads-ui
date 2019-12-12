import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-auto-blocking-range-ips',
  templateUrl: './auto-blocking-range-ips.component.html',
  styleUrls: ['./auto-blocking-range-ips.component.scss']
})
export class AutoBlockingRangeIpsComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = true;
  classC: number;
  classD: number;
  countMaxClickClassCInMinnutes: number
  autoBlockIpClassCByMaxClick: number;
  countMaxClickClassDInMinnutes: number
  autoBlockIpClassDByMaxClick: number;

  constructor(private _banIpsService: BanIpsService,
    public sessionService: SessionService,
    private _fuseProgresBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  itemsSource = {
    classC: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: 1
      },
      {
        text: 'Kích hoạt',
        value: 2
      }
    ],
    classD: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: 1
      },
      {
        text: 'Kích hoạt',
        value: 2
      }
    ],
    countMaxClickClassCInMinnutes: [
      {
        text: '10 phút',
        value: 10
      },
      {
        text: '20 phút',
        value: 20
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
        text: '90 phút',
        value: 90
      }
    ],
    autoBlockIpClassCByMaxClick: [
      {
        text: '10 click',
        value: 10
      },
      {
        text: '20 click',
        value: 20
      },
      {
        text: '30 click',
        value: 30
      },
      {
        text: '50 click',
        value: 50
      },
      {
        text: '90 click',
        value: 90
      }
    ],
    countMaxClickClassDInMinnutes: [
      {
        text: '5 phút',
        value: 5
      },
      {
        text: '10 phút',
        value: 10
      },
      {
        text: '15 phút',
        value: 15
      },
      {
        text: '20 phút',
        value: 20
      },
      {
        text: '30 phút',
        value: 30
      },
      {
        text: '50 phút',
        value: 50
      }
    ],
    autoBlockIpClassDByMaxClick: [
      {
        text: '5 click',
        value: 5
      },
      {
        text: '10 click',
        value: 10
      },
      {
        text: '15 click',
        value: 15
      },
      {
        text: '20 click',
        value: 20
      },
      {
        text: '30 click',
        value: 30
      },
      {
        text: '60 click',
        value: 60
      },
    ],
  };

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

    this.countMaxClickClassCInMinnutes = this.itemsSource.countMaxClickClassCInMinnutes[1].value;
    this.autoBlockIpClassCByMaxClick = this.itemsSource.autoBlockIpClassCByMaxClick[1].value;
    this.countMaxClickClassDInMinnutes = this.itemsSource.countMaxClickClassDInMinnutes[1].value;
    this.autoBlockIpClassDByMaxClick = this.itemsSource.autoBlockIpClassDByMaxClick[1].value;
  }

  getAccountDetail(accountId: string) {
    const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
      .subscribe(
        (res) => {
          if (res.data.adsAccount.isConnected) {
            this.getAutoBLockingIPRangeSetting();
          }
          else {
            this._fuseProgresBarService.hide();
            this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
            this._router.navigateByUrl('/danh-sach-tai-khoan');
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

  getAutoBLockingIPRangeSetting() {
    this._fuseProgresBarService.show();
    this.isProcessing = true;
    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgresBarService.hide();

        this.classC = res.data.setting.autoBlackListIpRanges.classC === false ? 1 : 2;
        this.classD = res.data.setting.autoBlackListIpRanges.classD === false ? 1 : 2;

        this.countMaxClickClassCInMinnutes = res.data.setting.autoBlackListIpRanges.countMaxClickClassCInMinnutes
          || this.itemsSource.countMaxClickClassCInMinnutes[1].value;
        this.autoBlockIpClassCByMaxClick = res.data.setting.autoBlackListIpRanges.autoBlockIpClassCByMaxClick
          || this.itemsSource.autoBlockIpClassCByMaxClick[1].value;

        this.countMaxClickClassDInMinnutes = res.data.setting.autoBlackListIpRanges.countMaxClickClassDInMinnutes
          || this.itemsSource.countMaxClickClassDInMinnutes[1].value;
        this.autoBlockIpClassDByMaxClick = res.data.setting.autoBlackListIpRanges.autoBlockIpClassDByMaxClick
          || this.itemsSource.autoBlockIpClassDByMaxClick[1].value;

        this.isProcessing = false;
        this._fuseSplashScreenService.hide();
      },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();

          if (error.status === 404) {
            this._dialogService._openInfoDialog(
              'Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              'tại đây',
              '/gan-tracking/chien-dich'
            );
          }
          else this._dialogService._openErrorDialog(error.error);

          this.classC = -1;
          this.classD = -1;
          this._fuseSplashScreenService.hide();
        });
    this.subscriptions.push(sub);
  }

  setAutoBlockingIPRange() {
    this.isProcessing = true;
    const params = this.generateAutoBlockingIPRangeParams();
    this._fuseProgresBarService.show();

    const sub = this._banIpsService.autoBlockingRangeIP(params)
      .subscribe((res: ILoginSuccess) => {

        this.getAutoBLockingIPRangeSetting();

        setTimeout(() => {
          this._fuseProgresBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  private generateAutoBlockingIPRangeParams(): any {
    const params = {
      classC: this.classC === 1 ? false : true,
      classD: this.classD === 1 ? false : true,
      countMaxClickClassCInMinnutes: this.countMaxClickClassCInMinnutes,
      autoBlockIpClassCByMaxClick: this.autoBlockIpClassCByMaxClick,
      countMaxClickClassDInMinnutes: this.countMaxClickClassDInMinnutes,
      autoBlockIpClassDByMaxClick: this.autoBlockIpClassDByMaxClick,
    }

    return params;
  }

}
