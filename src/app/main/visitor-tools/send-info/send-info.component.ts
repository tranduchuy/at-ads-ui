import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { SessionService } from 'app/shared/services/session.service';

interface SelectedWebsite {
  id: string;
  name: string;
  popupConfig: any;
}

@Component({
  selector: 'app-send-info',
  templateUrl: './send-info.component.html',
  styleUrls: ['./send-info.component.scss']
})
export class SendInfoComponent extends PageBaseComponent implements OnInit {
  websites: SelectedWebsite[] = [];

  hasWebsite: boolean;
  isProcessing: boolean;

  images = [
    {
      url: 'http://vaytienkhongthechap.net.vn/wp-content/uploads/2016/04/telephone_skills.jpg',
      cols: 1,
      rows: 1
    },
    {
      url: 'https://tekshanghai.com/wp-content/uploads/2018/12/tek-contact-us-support-man.png.png',
      cols: 1,
      rows: 1
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxpmxve4G01hSCfB-D1bmdznjBweo6vgAD_ZM06cxUeBAHmtf1',
      cols: 1,
      rows: 1
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFcmk67STyYb6HciXbcTguIXPJ69M9iLT5PjM2sFBU_xatnOi-',
      cols: 1,
      rows: 1
    }
  ]

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<SelectedWebsite[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  popupStyleForm: FormGroup;
  popupDisplayForm: FormGroup;
  popupDoneForm: FormGroup;

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _websiteManagementService: WebsiteManagementService,
    private _dialogService: DialogService,
    private _sessionService: SessionService
  ) {
    super();
  }

  selectColorCircle(e) {
    this.popupStyleForm.controls['themeColor'].setValue(e.color.hex);
  }

  selectSupporterAvatar(url: string) {
    this.popupStyleForm.controls['supporterAvatar'].setValue(url);
  }

  selectWebsite() {
    document.getElementById('send-info-popup-config').innerHTML = JSON.stringify(this.websiteCtrl.value.popupConfig);
  }

  changePopupStyleFormControlValue(value: string, controlName: string) {
    this.popupStyleForm.controls[controlName].setValue(value);
  }

  initForms() {
    this.popupStyleForm = new FormGroup({
      themeColor: new FormControl('#9c27b0'),
      supporterAvatar: new FormControl(this.images[0].url),
      supporterName: new FormControl('Nguyễn Thị A'),
      supporterMajor: new FormControl('Hỗ trợ viên')
    });
  }

  submitAllForms() {
    const data = {
      website: this.websiteCtrl.value.id || '',
      ...this.popupStyleForm.value
    };
    console.log(data);
  }

  ngOnInit() {
    this.initForms();
    this.websiteCtrl.setValue({
      id: '',
      name: ''
    });
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);
  }

  getWebsites(accountId: string) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this._websiteManagementService.getWebsites(accountId)
      .subscribe(res => {
        this.websites = (res.data.website || []).map(website => {
          return {
            id: website._id,
            name: website.domain,
            popupConfig: {
              a: 123
            }
          } as SelectedWebsite
        });

        if (this.websites.length > 0) {
          this.hasWebsite = true;

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
          document.getElementById('send-info-popup-config').innerHTML = JSON.stringify(this.websiteCtrl.value.popupConfig);

          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
        }
        else {
          this.hasWebsite = false;
          this.isProcessing = false;
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this._dialogService._openInfoDialog(
            'Tài khoản chưa có website nào. Vui lòng thêm',
            'tại đây',
            `/quan-ly-website/${this._sessionService.activeAccountId}`
          )
        }
      });
    this.subscriptions.push(sub);
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
}
