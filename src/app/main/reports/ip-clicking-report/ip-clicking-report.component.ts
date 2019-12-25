import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import * as moment from 'moment';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { takeUntil } from 'rxjs/operators';

interface SelectedWebsite {
  id: string;
  name: string;
}

@Component({
  selector: 'app-ip-clicking-report',
  templateUrl: './ip-clicking-report.component.html',
  styleUrls: ['./ip-clicking-report.component.scss']
})
export class IpClickingReportComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'status', 'location', 'os', 'browser', 'isPrivateBrowsing', 'network', 'keyword', 'campaignType', 'matchType', 'page', 'position'];
  dataSource = [];

  constructor(
    public sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _websiteManagementService: WebsiteManagementService
  ) {
    super();
  }

  isProcessing: boolean = false;
  pageTotal: number;
  currentPageNumber: number;
  totalItems: number;
  pageLimit: number = 20;
  clickTotal: number;
  realClick: number;
  spamClick: number;

  websites: SelectedWebsite[] = [];
  hasWebsite: boolean;

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<SelectedWebsite[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  ngOnInit() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);
  }

  getWebsites(accountId: string) {
    const sub = this._websiteManagementService.getWebsites(accountId)
      .subscribe(res => {
        this.websites = (res.data.website || []).map(website => {
          return {
            id: website._id,
            name: website.domain
          } as SelectedWebsite
        });

        if (this.websites.length > 0) {
          this.hasWebsite = true;
          this.websites.unshift({
            id: 'VIEW_ALL',
            name: 'Tất cả website'
          } as SelectedWebsite);

          // load the initial account list
          this.filteredWebsites.next(this.websites.slice());

          // listen for search field value changes
          this.websiteFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.filterWebsites();
            });

          // set default option is the first item of list websites
          this.websiteCtrl.setValue(this.websites[0]);

          this.getReport(accountId);
        }
        else {
          this.hasWebsite = false;
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this.isProcessing = false;
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this._dialogService._openInfoDialog(
            'Tài khoản chưa có website nào. Vui lòng thêm',
            'tại đây',
            `/quan-ly-website/${this.sessionService.activeAccountId}`
          )
        }
      });
    this.subscriptions.push(sub);
  }

  getReport(accountId: string) {
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

    this.getAccountStatisticReport(accountId);
    this.getDailyClickingReport(this.currentPageNumber);
  }

  private filterWebsites(): void {
    if (!this.websites) {
      return;
    }
    // get the search keyword
    let search = this.websiteFilterCtrl.value;
    if (!search) {
      this.filteredWebsites.next(this.websites.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the websites
    this.filteredWebsites.next(
      this.websites.filter(website => website.name.toLowerCase().indexOf(search) > -1)
    );
  }

  getCurrentRoute() {
    return `/bao-cao/ip-dang-click?page=${this.currentPageNumber}`;
  }

  showReason(reason: any) {
    if (reason)
      console.log(reason.message);
    else console.log('Unknown');
  }

  selectWebsite(): void {
    const selectedId = this.websiteCtrl.value.id;
    const selectedIndex = _.findIndex(this.websites, website => website.id === selectedId);
    this.websiteCtrl.setValue(this.websites[selectedIndex]);
    this.getReport(this.sessionService.activeAccountId);
  }

  getDailyClickingReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getDailyClickingReport({
      page,
      limit: this.pageLimit,
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    })
      .subscribe(res => {
        this.dataSource = res.data.entries;

        this.pageTotal = Math.ceil(res.data.totalItems / this.pageLimit);
        this.totalItems = res.data.totalItems;

        this._fuseProgressBarService.hide();
        this._fuseSplashScreenService.hide();
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this.isProcessing = false;
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getDailyClickingReport(event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

  generateAccountStatisticReportParams() {
    return {
      from: moment().startOf('day').valueOf().toString(),
      to: moment().endOf('day').valueOf().toString(),
      timeZone: moment().format('Z'),
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    }
  }

  abbreviateNumber(number: number): string | number {
    const SI_POSTFIXES: string[] = ["", "k", "M", "B", "T", "P", "E"];
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    if (tier == 0)
      return number;

    const postfix = SI_POSTFIXES[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = scaled.toFixed(1) + '';

    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2);

    return formatted + postfix;
  }

  getAccountStatisticReport(accountId: string) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const params = this.generateAccountStatisticReportParams();
    const sub = this._reportService.getAccountStatisticReport(params, accountId)
      .subscribe(
        res => {
          this.clickTotal = res.data.pieChart.realClick + res.data.pieChart.spamClick;
          this.realClick = res.data.pieChart.realClick;
          this.spamClick = res.data.pieChart.spamClick;
        });
    this.subscriptions.push(sub);
  }
}
