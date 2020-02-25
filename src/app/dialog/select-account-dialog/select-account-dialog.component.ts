import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { SelectAccountDialogService } from './select-account-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LicenceService } from 'app/main/upgrade-licence/licence.service';
import { Generals } from 'app/shared/constants/generals';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { IError } from '../models/i-error';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { ISuccess } from '../models/i-success';

@Component({
  selector: 'app-select-account-dialog',
  templateUrl: './select-account-dialog.component.html',
  styleUrls: ['./select-account-dialog.component.scss']
})
export class SelectAccountDialogComponent extends PageBaseComponent implements OnInit {

  accounts: any;
  selectedAccount: any;
  toggleState: boolean;

  expirations = [
    {
      text: '1 tháng',
      value: 1,
      discount: 0
    },
    {
      text: '3 tháng',
      value: 3,
      discount: 0
    },
    {
      text: '6 tháng',
      value: 6,
      discount: 0
    },
    {
      text: '12 tháng',
      value: 12,
      discount: 0
    },
  ];
  selectedExpiration: any;
  isProcessing: boolean;
  licence: any;
  LICENCE = Generals.Licence;
  searchedAccounts: any;

  constructor(
    public dialogRef: MatDialogRef<SelectAccountDialogComponent>,
    private _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _selectAccountDialogService: SelectAccountDialogService,
    private _licenceService: LicenceService,
    private _matDialog: MatDialog
  ) {
    super();
    dialogRef.disableClose = true;
    this.toggleState = false;
    this.isProcessing = false;
    this.licence = null;
    this.searchedAccounts = [];
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.accounts.length > 0) {
        this.searchedAccounts = [...this.accounts];
        this.selectedAccount = this.searchedAccounts[0];
      }

      this.getPackageToUpgrade(this.LICENCE.CUSTOM.type);
    }, 500);
  }

  filterListAccounts(filterValue: string): void {
    if (!filterValue) {
      this.searchedAccounts = this.accounts;
      this.selectedAccount = this.searchedAccounts[0];
    } else {
      this.searchedAccounts = this.searchedAccounts.filter(a => a.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);

      if (this.searchedAccounts.length > 0)
        this.selectedAccount = this.searchedAccounts[0];
    }
  }

  _openErrorDialog(error: IError, contact?: boolean): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = error.messages;

    if (contact !== undefined)
      dialogRef.componentInstance.contact = contact;
  }

  _openSuccessDialog(res: ISuccess): void {
    const dialogRef = this._matDialog.open(SuccessDialogComponent, {
      panelClass: 'success-dialog'
    });
    dialogRef.componentInstance.messages = res.messages;
  }

  getPackageToUpgrade(type: string) {
    this._fuseProgressBarService.show();
    const sub = this._licenceService.getPackages()
      .subscribe(res => {
        this.licence = (res.data.packages || []).find(p => p.type === type);

        if (this.licence) {
          this.mapExpirations();
        }

        this._fuseProgressBarService.hide();
      }, (error: HttpErrorResponse) => {
        this.licence = null;
        this._openErrorDialog(error.error);
        this._fuseProgressBarService.hide();
      });
    this.subscriptions.push(sub);
  }

  mapExpirations() {
    (this.licence.discountMonths || []).forEach((discount, index) => {
      this.expirations[index].discount = discount;
    });
    this.selectedExpiration = this.expirations[0].value;
  }

  connectAccount() {
    this._fuseProgressBarService.show();
    const sub = this._selectAccountDialogService.enableSelectedAccount(this.selectedAccount.accountId)
      .subscribe(() => {
        this.selectedAccount.isDisabled = false;
        this._sessionService.emitSelectedAccountFromExpiredUser(this.selectedAccount);
        this.dialogRef.close(true);
      },
        (error: HttpErrorResponse) => {
          this._openErrorDialog(error.error);
          this._fuseProgressBarService.hide();
        });
    this.subscriptions.push(sub);
  }

  toggleConnectAccountForm() {
    this.toggleState = true;
  }

  toggleUpgradeAccountForm() {
    this.toggleState = false;
  }

  divideThousand(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  sendRequest() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this._licenceService.sendUpgradeLicenceRequest({
      packageType: this.licence.type,
      numOfMonths: this.selectedExpiration
    }).subscribe((res: any) => {
      this._openSuccessDialog({
        messages: [`
          <center><h2>Gửi yêu cầu thành công</h2>
          Vui lòng chuyển khoản số tiền <h3 style="display: inline !important"><b>${this.divideThousand(res.data.price)} VNĐ</b></h3>
          với nội dung như sau: <h3><b>${res.data.code}</b></h3></center>
          <br><b>Thông tin tài khoản ngân hàng</b>
          <br><b>Ngân hàng:</b> Vietcombank
          <br><b>Chủ tài khoản:</b> Nguyen Binh Long
          <br><b>Số tài khoản:</b> 0331000419983
          <br><b>Chi nhánh:</b> VCB Chi nhánh Bến Thành Tp.HCM</b>.
          <br><br><center>Xin chân thành cảm ơn!</center>
        `]
      });
      this._fuseProgressBarService.hide();
      this.isProcessing = false;
    },
      (error: HttpErrorResponse) => {
        this._openErrorDialog(error.error);
        this._fuseProgressBarService.hide();
        this.isProcessing = false;
      });
    this.subscriptions.push(sub);
  }

  onSelectExpiration(event) {
    // console.log(event);
  }
}

