import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-blocked-ip-list',
  templateUrl: './blocked-ip-list.component.html',
  styleUrls: ['./blocked-ip-list.component.scss']
})
export class BlockedIpListComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'task', 'ip', 'isPrivateBrowsing', 'network', 'blockingOver', 'keyword', 'keywordMatchType'];

  dataSource = [];

  currentPageNumber: number;
  pageTotal: number;
  isProcessing: boolean = false;
  totalItems: number;
  pageLimit: number = 10;

  constructor(
    public sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.pageTotal = 0;

          const selectedActiveAccount = this.sessionService.getValueOfSelectedActiveAccount();
          if (selectedActiveAccount) {
            this.currentPageNumber = 1;
          }
          else {
            const page = this._activatedRoute.snapshot.queryParamMap.get('page');

            if (page) {
              if (isNaN(Number(page))) {
                this.currentPageNumber = 1;
              }
              else {
                this.currentPageNumber = Number(page);
              }
            }
            else {
              this.currentPageNumber = 1;
            }
          }
          this.router.navigate([], {
            queryParams: {
              page: this.currentPageNumber,
            }
          });

          this.getBlockedIPsListReport(this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  showCampaignListDialog(campaigns: any) {
    this._dialogService._openCampaignDialog(campaigns);
  }

  getBlockedIPsListReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getBlockedIPsListReport({ page, limit: this.pageLimit })
      .subscribe(res => {

        // const data = { "_id": "27.78.214.152", "campaigns": [{ "campaignId": "954282145", "campaignName": "1. Bảo hành tivi" }, { "campaignId": "933358694", "campaignName": "1. Tivi - chung - không xác định" }, { "campaignId": "763908172", "campaignName": "1. Tivi - loại" }, { "campaignId": "764202431", "campaignName": "1. Tivi - thương hiệu" }, { "campaignId": "764224443", "campaignName": "1.Tivi - chung" }, { "campaignId": "954320764", "campaignName": "2. Bảo hành tủ lạnh" }, { "campaignId": "764596510", "campaignName": "2. Tủ lạnh - Chung" }, { "campaignId": "933808708", "campaignName": "2. Tủ lạnh - Chung - không xác định" }, { "campaignId": "764944701", "campaignName": "2. Tủ lạnh - Thương Hiệu" }, { "campaignId": "764988188", "campaignName": "2.Tủ lạnh - quận" }, { "campaignId": "956091823", "campaignName": "3. Bảo hành máy giặt" }, { "campaignId": "957120444", "campaignName": "3. Máy giặt - chung - không xác định" }, { "campaignId": "766431547", "campaignName": "3. Máy giặt - thương hiệu" }, { "campaignId": "767004414", "campaignName": "3.Máy giặt - chung" }, { "campaignId": "767020272", "campaignName": "3.Máy giặt - Quận" }, { "campaignId": "2008215084", "campaignName": "5. Tủ lạnh - Thương Hiệu #2" }, { "campaignId": "1152293962", "campaignName": "8. Máy Lạnh - Chung - không xác định" }, { "campaignId": "765839244", "campaignName": "8. Máy lạnh - Thương hiệu" }, { "campaignId": "1726042940", "campaignName": "Bao hành - Top" }, { "campaignId": "767008514", "campaignName": "Lò vi sóng - chung" }, { "campaignId": "766682305", "campaignName": "Lò vi sóng - Quận" }, { "campaignId": "766652857", "campaignName": "Lò vi sóng - Thương hiệu" }, { "campaignId": "765894921", "campaignName": "Máy Lạnh - Quận" }, { "campaignId": "1729464644", "campaignName": "Search. Dynamic.All" }, { "campaignId": "780442513", "campaignName": "Search.Bảo Hành - Thương hiệu" }, { "campaignId": "1726030931", "campaignName": "Search.Bảo Hành - Thương hiệu chay Top" }, { "campaignId": "764777026", "campaignName": "Search.Máy Lạnh - Chung" }], "numberOfCampaigns": 27, "network": null, "isPrivateBrowsing": false, "gclid": "EAIaIQobChMImqWSpNj55AIVzw0rCh0z5AzwEAAYASAAEgIRHvD_BwE", "gclidInfo": { "_id": "5d93a23c698ac43420c6534d", "keywordMatchType": "Không xác định", "device": "Điện thoại", "clickType": "Headline", "keywordId": "19959388920", "keyword": "", "adGroupId": "64817373101", "adGroupName": "All Website", "campaignId": "1729464644", "campaignName": "Search. Dynamic.All", "gclId": "EAIaIQobChMImqWSpNj55AIVzw0rCh0z5AzwEAAYASAAEgIRHvD_BwE", "lopRegionCriteriaId": "9040373", "lopMostSpecificTargetId": "1028581", "lopCityCriteriaId": "1028581", "lopCountryCriteriaId": "2704", "dateOfTakingReport": "2019-10-01T00:00:00.000Z", "__v": 0, "createdAt": "2019-10-01T19:00:13.076Z", "updatedAt": "2019-10-01T19:00:13.076Z" } };
        // this.dataSource.push(data);

        this.dataSource = res.data.ips;

        this.totalItems = res.data.totalItems;
        this.pageTotal = Math.ceil(this.totalItems / this.pageLimit) || 0;

        setTimeout(() => {
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
        }, 500);
      },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  openRemoveAutoBlockedIPConfirmDialog(ip: string) {
    const openConfirmDialogSub = this._dialogService._openConfirmDialog('Mở chặn IP này?')
      .subscribe(
        (isAccepted: boolean) => {
          if (isAccepted)
            this.removeAutoBlockedIP(ip);
        });
    this.subscriptions.push(openConfirmDialogSub);
  }

  removeAutoBlockedIP(ip: string) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.removeAutoBlockedIP({ ips: [ip] })
      .subscribe(
        (res: ILoginSuccess) => {

          this.getBlockedIPsListReport(this.currentPageNumber);

          setTimeout(() => {
            this._fuseProgressBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();

          if (error.status === 404) {
            this._dialogService._openErrorDialog({
              messages: [`${error.error.data.ips[0]} không nằm trong blacklist.`]
            });
          }
          else this._dialogService._openErrorDialog(error.error);

          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getBlockedIPsListReport(event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

}
