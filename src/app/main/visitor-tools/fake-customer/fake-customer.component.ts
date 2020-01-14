import { Component, OnInit, ViewChild } from '@angular/core';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { VisitorToolsService } from '../visitor-tools.service';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect, MatRadioChange } from '@angular/material';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { takeUntil } from 'rxjs/operators';

interface SelectedWebsite {
  id: string;
  name: string;
  isPopupOpening: boolean;
  popupConfig: any;
}

@Component({
  selector: 'app-fake-customer',
  templateUrl: './fake-customer.component.html',
  styleUrls: ['./fake-customer.component.scss']
})
export class FakeCustomerComponent extends PageBaseComponent implements OnInit {
  websites: SelectedWebsite[] = [];
  hasWebsite: boolean;
  isProcessing: boolean;
  configPanelOpenState: boolean;

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<SelectedWebsite[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  positionOptions = [
    {
      name: 'left',
      value: 1,
      selected: true
    },
    {
      name: 'right',
      value: 2,
      selected: false
    },
    {
      name: 'top-left',
      value: 3,
      selected: false
    },
    {
      name: 'top-right',
      value: 4,
      selected: false
    }
  ];

  avatarOptions = [
    {
      name: 'Thanh niên',
      value: 1,
      checked: true
    },
    {
      name: 'Trung niên',
      value: 2,
      checked: false
    },
    {
      name: 'Biểu tượng',
      value: 3,
      checked: false
    },
    {
      name: 'Hình động',
      value: 4,
      checked: false
    }
  ]

  avatars: string[] = [];

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _websiteManagementService: WebsiteManagementService,
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _visitorToolsService: VisitorToolsService
  ) {
    super();

    this.loadAvatarsByOption(1);
  }

  ngOnInit() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
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

  loadAvatarsByOption(option: number) {
    this.avatars = [];
    switch (option) {
      //teenagers
      case 1:
        for (let i = 110; i <= 199; i++) {
          this.avatars.push(`https://w.cokhach.com/assets/images/avatar/2/${i}.jpg`);
        }
        break;

      //matures
      case 2:
        for (let i = 111; i <= 198; i++) {
          this.avatars.push(`https://w.cokhach.com/assets/images/avatar/3/${i}.jpg`);
        }
        break;

      //symbols
      case 3:
        for (let i = 111; i <= 129; i++) {
          this.avatars.push(`https://w.cokhach.com/assets/images/avatar/1/${i}.png`);
        }
        break;

      case 4:
        for (let i = 1; i <= 16; i++) {
          this.avatars.push(`https://w.cokhach.com/assets/images/avatar/4/${i}.gif`);
        }
        break;
      default:
        break;
    }
  }

  onSelectPositionOption(value: number) {
    for (const option of this.positionOptions)
      if (option.value === value)
        option.selected = true;
      else option.selected = false;
  }

  onSelectAvatarOption(e: MatRadioChange) {
    for (const option of this.avatarOptions)
      if (option.value === e.value)
        option.checked = true;
      else option.checked = false;

    this.loadAvatarsByOption(e.value);
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
