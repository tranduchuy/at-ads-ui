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
        // let data: any = '{"entries":[{"_id":"113.172.253.143","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"9"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Samsung Browser","version":"9.2","major":"9"},"createdAt":"2020-02-29T13:37:28.397Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":1},{"_id":"171.254.79.125","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"iOS","version":"12.2"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Mobile Safari","version":"12.1","major":"12"},"createdAt":"2020-02-29T13:00:26.393Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":null}],"click":1},{"_id":"69.171.251.32","info":[{"location":{"country_code":"US","country_name":"United States","city":null,"postal":null,"latitude":37.751,"longitude":-97.822,"state":null},"keyword":null,"isSpam":false,"os":{"name":"iOS","version":"13.3.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Mobile Safari","version":"13.0.5","major":"13"},"createdAt":"2020-02-29T12:36:10.207Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Other"}],"click":1},{"_id":"27.64.60.81","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Windows","version":"10"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.122","major":"80"},"createdAt":"2020-02-29T11:55:18.452Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":1},{"_id":"171.249.86.190","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"8.1.0"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.117","major":"80"},"createdAt":"2020-02-29T11:41:01.005Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":3,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":3},{"_id":"1.52.67.5","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"iOS","version":"12.4.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Mobile Safari","version":"12.1.2","major":"12"},"createdAt":"2020-02-29T11:37:57.962Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":1},{"_id":"14.186.202.191","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"8.0.0"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Samsung Browser","version":"10.2","major":"10"},"createdAt":"2020-02-29T11:37:51.206Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":1},{"_id":"27.3.8.45","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"5.1.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Samsung Browser","version":"10.2","major":"10"},"createdAt":"2020-02-29T11:36:30.055Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":1},{"_id":"171.232.6.94","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":true,"os":{"name":"iOS","version":"11.4.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Mobile Safari","version":"11.0","major":"11"},"createdAt":"2020-02-29T11:36:23.040Z","isPrivateBrowsing":true,"reason":{"message":"Ip bị chặn, do thiết lập chặn vào trang bằng trình ẩn danh."},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":1},{"_id":"171.249.86.190","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"8.1.0"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.117","major":"80"},"createdAt":"2020-02-29T11:33:20.044Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":3},{"_id":"115.75.255.56","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"5.1.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.119","major":"80"},"createdAt":"2020-02-29T11:30:47.357Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":1},{"_id":"123.23.221.134","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"5.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"73.0.3683.90","major":"73"},"createdAt":"2020-02-29T11:26:45.714Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":1},{"_id":"42.119.229.151","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"iOS","version":"13.3"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"79.0.3945.73","major":"79"},"createdAt":"2020-02-29T11:21:28.752Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":2},{"_id":"42.119.229.151","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"iOS","version":"13.3"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"79.0.3945.73","major":"79"},"createdAt":"2020-02-29T11:21:14.497Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":2},{"_id":"173.252.127.19","info":[{"location":{"country_code":"US","country_name":"United States","city":null,"postal":null,"latitude":37.751,"longitude":-97.822,"state":null},"keyword":null,"isSpam":false,"os":{"name":"iOS","version":"13.3"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Mobile Safari","version":"13.0.4","major":"13"},"createdAt":"2020-02-29T11:12:30.542Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":1},{"_id":"1.52.65.41","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Windows","version":"7"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"79.0.3945.134","major":"79"},"createdAt":"2020-02-29T11:11:47.077Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google display"}],"click":1},{"_id":"27.3.89.62","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"7.0"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.119","major":"80"},"createdAt":"2020-02-29T11:11:16.143Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":2},{"_id":"27.3.89.62","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"7.0"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.119","major":"80"},"createdAt":"2020-02-29T11:10:52.533Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":2},{"_id":"42.116.119.253","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"6.0.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.119","major":"80"},"createdAt":"2020-02-29T11:10:02.814Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":2},{"_id":"42.116.119.253","info":[{"location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":null,"isSpam":false,"os":{"name":"Android","version":"6.0.1"},"networkCompany":{"name":null,"value":-1},"browser":{"name":"Chrome","version":"80.0.3987.119","major":"80"},"createdAt":"2020-02-29T11:09:03.361Z","isPrivateBrowsing":false,"reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"page":null,"position":null,"matchType":null,"campaignType":"Google search"}],"click":2}],"totalItems":196}';

        // data = JSON.parse(data);

        const data: any = res.data;

        this.dataSource = data.entries;

        this.pageTotal = Math.ceil(data.totalItems / this.pageLimit);
        this.totalItems = data.totalItems;

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
          // let data: any = '{"pieChart":{"spamClick":26,"realClick":170},"lineChart":[{"_id":"29-02-2020","spamClick":26,"realClick":170}]}';
          // data = JSON.parse(data);

          const data: any = res.data;

          this.clickTotal = data.pieChart.realClick + data.pieChart.spamClick;
          this.realClick = data.pieChart.realClick;
          this.spamClick = data.pieChart.spamClick;
        });
    this.subscriptions.push(sub);
  }
}
