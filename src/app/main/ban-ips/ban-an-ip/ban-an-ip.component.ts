import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';

import { BanIpsService } from '../ban-ips.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ban-an-ip',
  templateUrl: './ban-an-ip.component.html',
  styleUrls: ['./ban-an-ip.component.scss']
})
export class BanAnIPComponent extends EditableFormBaseComponent implements OnInit {

  constructor(
    private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    const sub = this._sessionService.getAdwordId()
      .subscribe((adsId: string) => {
        if (!adsId) {
          this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản AdWords');
          this._router.navigateByUrl('/them-tai-khoan-moi');
        }
      });

    this.subscriptions.push(sub);
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  initForm(): void {
    this.form = this.fb.group({
      bannedIP: ['', [Validators.required, this.validatorService.checkIP]]
    });
  }

  private generateBlockSapmleIPParams(): any {
    const params = {
      ip: { ...this.form.value }.bannedIP
    };

    return params;
  }

  post(): void {
    const params = this.generateBlockSapmleIPParams();

    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.blockSampleIP(params).subscribe((res: ILoginSuccess) => {
      this._dialogService._openSuccessDialog(res);
      this._fuseProgressiveBarService.hide();
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseProgressiveBarService.hide();
      }
    );
    this.subscriptions.push(sub);
  }

  private generateUnblockeSampleIPParmas(): any {
    const parmas = {
      ip: '1.3.3.3'
    }
    return parmas;
  }

  unblockSampleIP() {
    this._dialogService._openConfirmDialog('Mở chặn IP này?')
      .subscribe((result: boolean) => {
        if (result) {
          const params = this.generateUnblockeSampleIPParmas();
          this._fuseProgressiveBarService.show();
          const sub = this._banIpsService.unblockSampleIP(params)
            .subscribe((res: ILoginSuccess) => {
              this._fuseProgressiveBarService.hide();
              this._dialogService._openSuccessDialog(res);
            },
              (error: HttpErrorResponse) => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error)
              })
          this.subscriptions.push(sub);
        }
      })
  }

  // private generateRemoveBlockedIPsParams(): any {
  //   const params = {
  //     action: 'REMOVE',
  //     ips: ['1.2.3.4']
  //   };

  //   return params;
  // }

  // removeBlockedIPs(): void {
  //   this._dialogService._openConfirmDialog('Mở chặn IP này?')
  //     .subscribe((result: boolean) => {
  //       if (result) {
  //         const params = this.generateRemoveBlockedIPsParams();
  //         this._fuseProgressiveBarService.show();
  //         const sub = this._banIpsService.removeBlockedIPs(params)
  //           .subscribe((res: ILoginSuccess) => {
  //             this._fuseProgressiveBarService.hide();
  //             this._dialogService._openSuccessDialog(res);
  //           },
  //             (error: HttpErrorResponse) => {
  //               this._fuseProgressiveBarService.hide();
  //               this._dialogService._openErrorDialog(error.error)
  //             })
  //         this.subscriptions.push(sub);
  //       }
  //     })
  // }
}