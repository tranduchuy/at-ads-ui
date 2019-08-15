import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-ban-optional-ip',
  templateUrl: './ban-optional-ip.component.html',
  styleUrls: ['./ban-optional-ip.component.scss']
})
export class BanOptionalIPComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'ip', 'status', 'task', 'unlockButton'];
  blockedIPs: string[] = [];
  isProcessing: boolean = false;

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    public _dialogService: DialogService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getBlockedCustomIPs();
        }
      });
    this.subscriptions.push(sub);
  }

  getBlockedCustomIPs() {
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.getBlockedCustomIPs()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.blockedIPs = res.data.ips;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.blockedIPs = [];
        }
      );
    this.subscriptions.push(sub);
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  initForm(): void {
    this.form = this.fb.group({
      listBannedIP: ['', [Validators.required, this.validatorService.checkListIP]]
    });
  }

  post(): void {
    const params = this.generatePostObject();
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.blockIPs(params).subscribe((res: ILoginSuccess) => {
      this.getBlockedCustomIPs();
      this._fuseProgressiveBarService.hide();
      setTimeout(() => {
        this._dialogService._openSuccessDialog(res);
        this.isProcessing = false;
      }, 0);
    },
      (error: HttpErrorResponse) => {
        this._fuseProgressiveBarService.hide();
        if (error.status === 409) {
          this._dialogService._openErrorDialog({
            messages: [`${error.error.data.ips.join(', ')} đã có trong blacklist.`]
          });
        } else {
          this._dialogService._openErrorDialog(error.error);
        }
        this.isProcessing = false;
      }
    );
    this.subscriptions.push(sub);
  }

  private generatePostObject(): any {
    const params = {
      action: 'ADD',
      ips: { ...this.form.value }.listBannedIP.split(/\r?\n/)
    };

    return params;
  }

  unblockSampleIP(ip: string) {

    const openCofirmDialogSub = this._dialogService._openConfirmDialog('Mở chặn IP này?')
      .subscribe((res: boolean) => {
        if (res) {
          this.isProcessing = true;
          this._fuseProgressiveBarService.show();

          const sub = this._banIpsService.removeBlockedIPs({
            action: 'REMOVE',
            ips: [ip]
          })
            .subscribe((res: ILoginSuccess) => {

              this.getBlockedCustomIPs();

              setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
              }, 0);
            },
              (error: HttpErrorResponse) => {
                this._fuseProgressiveBarService.hide();

                if (error.status === 404)
                  this._dialogService._openErrorDialog({ messages: [`${error.error.data.ips[0]} không nằm trong danh sách IP đã bị chặn`] });
                else this._dialogService._openErrorDialog(error.error);

                this.isProcessing = false;
              });
          this.subscriptions.push(sub);
        }
      });
    this.subscriptions.push(openCofirmDialogSub);
  }
}
