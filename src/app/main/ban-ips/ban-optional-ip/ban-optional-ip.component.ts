import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ban-optional-ip',
  templateUrl: './ban-optional-ip.component.html',
  styleUrls: ['./ban-optional-ip.component.scss']
})
export class BanOptionalIPComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'ip', 'status', 'task', 'unlockButton'];
  blockedIPs: string[] = [];
  isProcessing: boolean = true;

  listIPs = [
    "171.233.238.83",
    "171.233.142.222",
    "1.52.57.61",
    "171.253.190.223",
    "27.64.61.60",
    "123.21.100.152",
    "171.233.196.198",
    "171.244.166.30",
    "171.253.190.223",
    "27.2.128.173",
    "58.187.169.199",
    "103.249.23.85",
    "58.187.169.107",
    "171.253.190.223",
    "116.118.120.245",
    "42.112.90.51",
    "113.172.123.221",
    "1.54.42.176",
    "218.212.158.116",
    "1.52.200.15",
    "171.248.171.70",
    "58.187.22.185",
    "1.55.50.150",
    "113.173.194.81",
    "103.249.23.87",
    "27.77.179.141",
    "1.52.193.209",
    "27.64.61.60",
    "116.102.131.240",
    "115.74.44.135",
    "116.100.232.215",
    "42.112.83.83",
    "45.126.97.43",
    "27.3.254.33",
    "118.69.107.198",
    "113.23.30.244",
    "171.253.191.114",
    "14.167.145.196",
    "27.3.254.33",
    "116.118.120.245",
    "58.187.169.107",
    "116.108.34.68",
    "14.186.61.101",
    "1.53.154.159",
    "58.187.22.185",
    "116.118.120.245",
    "103.199.71.206",
    "116.102.131.240",
    "171.244.105.25",
    "171.233.245.7",
    "14.164.247.63",
    "14.167.145.196",
    "14.167.145.196",
    "42.116.118.100",
    "171.253.9.1",
    "27.77.179.141",
    "14.164.247.63",
    "27.74.252.144",
    "14.187.133.72",
    "58.187.22.185",
    "171.253.24.72",
    "171.239.175.71",
    "116.106.246.94",
    "42.118.3.135",
    "14.186.69.84",
    "116.109.28.116",
    "116.109.28.116",
    "112.197.32.120",
    "42.119.245.253",
    "118.69.128.36",
    "27.78.134.16",
    "118.69.128.36",
    "118.68.71.197",
    "115.77.232.54",
    "1.52.205.243",
    "27.78.38.16",
    "27.74.135.99",
    "171.246.96.178",
    "171.253.28.201",
    "66.249.89.213",
    "125.214.57.171",
    "171.247.16.17",
    "118.69.128.36",
    "1.55.198.117",
    "27.78.49.107",
    "113.23.31.255",
    "66.249.89.213",
    "113.173.254.235",
    "42.118.57.247",
    "27.75.221.225",
    "171.253.28.201",
    "171.239.137.223",
    "118.69.128.36",
    "118.69.128.36",
    "116.96.224.249",
    "171.235.236.138",
    "14.172.167.148",
    "115.74.36.71",
    "118.69.128.36",
    "27.77.214.28",
    "123.21.215.180",
    "27.78.49.107",
    "45.126.97.46",
    "103.199.41.156",
    "45.126.97.44",
    "113.172.163.227",
    "1.53.167.156",
    "1.54.5.8",
    "27.74.135.99",
    "183.80.21.92",
    "1.55.198.117",
    "118.69.128.36",
    "116.109.28.116",
    "115.75.188.161",
    "113.172.163.227",
    "171.246.96.178",
    "1.52.126.222",
    "113.185.77.81",
    "171.239.166.115",
    "66.249.89.213",
    "45.126.97.44",
    "103.199.41.205",
    "14.243.43.229",
    "171.233.136.207",
    "115.79.60.249",
    "171.246.96.178",
    "115.77.27.217",
    "171.246.96.178",
    "66.249.89.213",
    "118.69.128.36",
    "66.249.89.213",
    "42.116.41.74",
    "171.253.0.214",
    "103.7.36.19",
    "66.249.89.213",
    "118.69.77.157",
    "14.167.201.218",
    "66.249.89.213",
    "66.249.89.213",
    "14.183.123.182",
    "1.53.161.36",
    "14.168.30.218",
    "113.185.72.164",
    "113.172.217.231",
    "171.253.134.110",
    "66.249.89.215",
    "171.253.0.194",
    "116.103.28.150",
    "66.249.89.215",
    "171.253.222.151",
    "1.52.200.9",
    "115.72.118.34",
    "103.199.69.125",
    "123.22.229.21",
    "118.68.102.9",
    "171.245.206.245",
    "171.239.71.0",
    "113.185.77.239",
    "42.112.13.236",
    "103.199.70.171",
    "14.169.171.21",
    "66.249.89.213",
    "115.76.93.229",
    "1.52.161.212",
    "115.73.235.54",
    "1.53.154.159",
    "1.52.60.27",
    "113.172.138.97",
    "103.199.37.60",
    "66.249.89.213",
    "171.253.187.100",
    "113.161.83.108",
    "14.187.229.11",
    "1.52.207.188",
    "171.245.207.68",
    "116.108.210.161",
    "14.187.1.44",
    "27.75.72.135",
    "171.245.206.245",
    "113.182.118.68",
    "103.199.23.149",
    "115.79.120.88",
    "42.116.114.200",
    "113.173.149.138",
    "118.69.128.36",
    "118.68.5.59",
    "66.249.89.213",
    "66.249.89.213",
    "171.232.90.92",
    "171.233.239.171",
    "103.7.38.177",
    "171.253.14.234",
    "66.249.89.213",
    "103.249.23.88",
    "66.249.89.215",
    "103.199.37.33",
    "66.249.89.213",
    "115.72.118.34",
    "125.214.58.111",
    "103.199.36.125",
    "113.182.118.68",
    "103.199.36.25",
    "113.185.77.239",
    "66.249.89.215",
    "113.23.110.63",
    "118.68.5.59",
    "118.68.5.59",
    "27.3.89.166",
    "116.106.6.67",
    "171.235.35.74",
    "103.199.36.51",
    "116.108.126.216",
    "103.199.71.177",
    "42.112.155.46",
    "1.53.112.244",
    "1.53.161.36",
    "103.199.44.130",
    "1.52.207.188",
    "14.240.72.104",
    "171.245.206.245",
    "14.252.14.130",
    "113.182.118.68",
    "171.253.25.2",
    "118.70.54.249",
    "113.173.108.202",
    "27.3.232.242",
    "116.109.26.83",
    "27.3.89.20",
    "66.249.89.213",
    "171.253.0.214",
    "66.249.89.213",
    "171.253.13.20",
    "66.249.89.213",
    "171.253.28.201",
    "113.186.187.151",
    "171.249.155.77",
    "14.242.85.20",
    "14.242.85.20",
    "27.71.206.93",
    "171.245.207.68",
    "103.249.23.121",
    "103.199.26.132",
    "113.161.32.183",
    "113.185.77.81",
    "171.227.121.247",
    "14.183.122.217",
    "27.3.89.20",
    "113.23.111.126",
    "118.68.5.59",
    "14.254.17.47",
    "58.187.170.126",
    "171.252.253.238",
    "42.112.158.106",
    "171.247.169.49",
    "66.249.89.213",
    "171.255.147.9",
    "103.7.39.81",
    "1.52.60.27",
    "103.199.70.249",
    "171.253.14.192",
    "171.232.46.164",
    "103.199.71.86",
    "1.53.161.36",
    "103.7.39.150",
    "125.214.56.151",
    "171.253.133.176",
    "103.199.70.91",
    "14.186.238.182",
    "27.2.137.202",
    "113.163.253.111",
    "123.21.0.139",
    "14.169.171.21",
    "171.239.149.87",
    "115.73.100.77",
    "1.53.154.159",
    "42.118.5.60",
    "66.249.89.213",
    "66.249.89.213",
    "171.253.128.99",
    "171.253.10.152",
    "115.72.118.34",
    "112.197.33.55",
    "171.235.49.248",
    "103.129.189.47",
    "42.117.154.15",
    "14.187.229.11",
    "14.234.20.70",
    "66.249.89.215",
    "171.253.131.143",
    "1.52.207.188",
    "103.199.43.74",
    "115.73.174.19",
    "27.3.32.230",
    "171.253.27.179",
    "113.185.75.180",
    "66.249.89.213",
    "115.74.205.114",
    "118.69.77.157",
    "51.77.129.159",
    "42.112.82.132",
    "1.55.197.97",
    "171.253.14.192",
    "42.114.29.14",
    "115.72.118.34",
    "113.185.72.133",
    "66.249.89.215",
    "27.3.129.227",
    "103.199.36.125",
    "42.118.214.34",
    "115.72.183.200",
    "45.126.99.116",
    "66.249.89.215",
    "171.253.133.142",
    "113.23.110.63",
    "115.77.26.253",
    "103.199.36.51",
    "14.169.41.78",
    "66.249.89.213",
    "118.68.5.59",
    "171.253.0.214",
    "66.249.89.213",
    "113.185.75.57",
    "180.93.216.180",
    "14.186.98.122",
    "125.214.52.126",
    "222.254.237.147",
    "171.239.133.76",
    "58.187.170.19",
    "103.199.70.171",
    "27.64.221.44",
    "113.170.237.13",
  ];

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    public _dialogService: DialogService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this._fuseProgressiveBarService.show();
    this.initForm();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(
              (res) => {

                if (res.data.adsAccount.isConnected) {
                  this._fuseProgressiveBarService.hide();
                  this.getBlockedCustomIPs();
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

  getBlockedCustomIPs() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.getBlockedCustomIPs()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.blockedIPs = res.data.ips;
        this.isProcessing = false;
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

          this.blockedIPs = [];
        }
      );
    this.subscriptions.push(sub);
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  post(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const params = this.generatePostObject();

    const sub = this._banIpsService.blockIPs(params)
      .subscribe(
        (res: ILoginSuccess) => {

          this.getBlockedCustomIPs();

          setTimeout(() => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();

          if (error.status === 409) {

            if (error.error.messages[0] === 'Ip đang nằm trong whiteList.')
              this._dialogService._openErrorDialog({
                messages: [`${error.error.data.ips.join(', ')} đã có trong whitelist.`]
              });
            else
              this._dialogService._openErrorDialog({
                messages: [`${error.error.data.ips.join(', ')} đã có trong blacklist.`]
              });
          }
          else this._dialogService._openErrorDialog(error.error);

          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  initForm(): void {
    // this.form = this.fb.group({
    //   listBannedIP: ['']
    // });

    this.form = this.fb.group({
      listBannedIP: ['', [Validators.required, this.validatorService.checkListIP]]
    });
  }

  private generatePostObject(): any {
    

    // this.listIPs = [...new Set(this.listIPs)];

    // const ips = [];

    // for (let i = 81; i < this.listIPs.length; i++)
    //   ips.push(this.listIPs[i]);

    // const params = {
    //   action: 'ADD',
    //   ips
    // };

    const params = {
      action: 'ADD',
      ips: { ...this.form.value }.listBannedIP.split(/\r?\n/)
    };

    params.ips = params.ips.filter(item => item);

    return params;
  }

  unblockSampleIP(ip: string) {
    const openCofirmDialogSub = this._dialogService._openConfirmDialog('Mở chặn IP này?')
      .subscribe(
        (res: boolean) => {
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
