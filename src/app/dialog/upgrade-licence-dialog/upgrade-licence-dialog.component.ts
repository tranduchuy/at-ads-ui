import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { API } from 'app/shared/constants/api.constant';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { IError } from '../models/i-error';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { ISuccess } from '../models/i-success';

interface Licence {
  name: string;
  type: string;
  price: number;
  isDiscount: boolean;
  discountMonths: number[]
}

@Component({
  selector: 'app-upgrade-licence-dialog',
  templateUrl: './upgrade-licence-dialog.component.html',
  styleUrls: ['./upgrade-licence-dialog.component.scss']
})
export class UpgradeLicenceDialogComponent extends PageBaseComponent implements OnInit {
  licence: Licence;

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
  isProcessing: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UpgradeLicenceDialogComponent>,
    private _fuseProgressBarService: FuseProgressBarService,
    private _httpClient: HttpClient,
    private _matDialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.mapExpirations();
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

  onSelectExpiration(event) {
    // console.log(event);
  }

  divideThousand(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  mapExpirations() {
    (this.licence.discountMonths || []).forEach((discount, index) => {
      this.expirations[index].discount = discount;
    });
    this.selectedExpiration = this.expirations[0].value;
  }


  sendRequest() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this._httpClient.post(API.User.sendUpgradeLicenceRequest, {
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
      this.dialogRef.close(true);
    },
      (error: HttpErrorResponse) => {
        this._openErrorDialog(error.error);
        this._fuseProgressBarService.hide();
        this.isProcessing = false;
        this.dialogRef.close(true);
      });
    this.subscriptions.push(sub);

  }
}
