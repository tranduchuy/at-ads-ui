import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-auto-blocking-range-ips',
  templateUrl: './auto-blocking-range-ips.component.html',
  styleUrls: ['./auto-blocking-range-ips.component.scss']
})
export class AutoBlockingRangeIpsComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = false;
  classC: boolean;
  classD: boolean;

  constructor(private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
  ) {
    super();
  }

  itemsSource = {
    classC: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: false
      },
      {
        text: 'Kích hoạt',
        value: true
      }
    ],
    classD: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: false
      },
      {
        text: 'Kích hoạt',
        value: true
      }
    ]
  };

  ngOnInit(): void {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {

        if (accountId)
          this.getAutoBLockingIPRangeSetting();

      });
    this.subscriptions.push(sub);
  }

  getAutoBLockingIPRangeSetting() {
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();

        this.classC = res.data.setting.autoBlackListIpRanges.classC;
        this.classD = res.data.setting.autoBlackListIpRanges.classD;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  setAutoBlockingIPRange() {
    this.isProcessing = true;
    const params = this.generateAutoBlockingIPRangeParams();
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.autoBlockingRangeIP(params)
      .subscribe((res: ILoginSuccess) => {

        this.getAutoBLockingIPRangeSetting();

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
        });
    this.subscriptions.push(sub);
  }

  private generateAutoBlockingIPRangeParams(): any {
    const params = {
      classC: this.classC,
      classD: this.classD
    }

    return params;
  }

}
