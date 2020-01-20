import { Component, OnInit, ViewChild } from '@angular/core';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { VisitorToolsService } from '../visitor-tools.service';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect, MatRadioChange, MatSlideToggleChange, MatSliderChange, MatCheckboxChange } from '@angular/material';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface SelectedWebsite {
  id: string;
  name: string;
  isPopupOpening: boolean;
  popupConfig: any;
}

interface FakeCustomerRunningDevice {
  name: string;
  value: number;
  checked: boolean;
}

interface FakeCustomerDisplayConfig {
  isEnabled: boolean;
  runningDevices: FakeCustomerRunningDevice[];
  positionOnPage: number;
  autoDisplayTime: number;
}

interface FakeCustomerContentConfig {
  avatarType: number;
  title: string;
  body: string;
  pageUrl: string;
}

interface FakeCustomerStyleConfig {
  themeColor: string;
  shape: number;
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

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<SelectedWebsite[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  enableDisplayToggle = {
    label: 'Cho phép hiển thị',
    color: 'accent',
    checked: true,
    disabled: false
  };

  positionOptions = [
    {
      name: 'bottom-left',
      value: 1,
      selected: true
    },
    {
      name: 'bottom-right',
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
  ];

  avatars: string[] = [];

  shapeOptions = [
    {
      name: 'Bo góc vuông',
      value: 1,
      checked: true,
      style: 'shape1'
    },
    {
      name: 'Bo góc tròn',
      value: 2,
      checked: false,
      style: 'shape2'
    }
  ];

  displayConfig: FakeCustomerDisplayConfig = {
    isEnabled: false,
    runningDevices: [
      {
        name: 'Máy tính',
        value: 1,
        checked: true
      },
      {
        name: 'Điện thoại',
        value: 2,
        checked: true
      },
      {
        name: 'Máy tính bảng',
        value: 3,
        checked: true
      }
    ],
    positionOnPage: 1,
    autoDisplayTime: 30
  }

  contentConfig: FakeCustomerContentConfig = {
    avatarType: this.avatarOptions[0].value,
    title: 'Khách đang xem sản phẩm',
    body: '#fake_name đã để lại thông tin: sđt #fake_phone, email #fake_email',
    pageUrl: 'https://x2.com.vn'
  }

  styleConfig: FakeCustomerStyleConfig = {
    themeColor: '#2196f3',
    shape: 1
  }

  configPanelOpenState: boolean;
  isAvatarStorageShown: boolean = false;

  minAutoDisplayTime: number = 10;   // seconds
  maxAutoDisplayTime: number = 90;   // seconds

  selectedPosition: any;
  selectedShape: any;
  sampleTitle: string;
  sampleBody: string;

  //===================

  fakeDataFields = [
    {
      name: '#fake_name',
      fieldName: '#fake_name',
      value: 1,
    },
    {
      name: '#fake_phone',
      fieldName: '#fake_phone',
      value: 2
    },
    {
      name: '#fake_email',
      fieldName: '#fake_email',
      value: 3
    },
    {
      name: '#fake_location',
      fieldName: '#fake_location',
      value: 4
    }
  ];
  selectedTitleFakeDataFields = [];
  selectedBodyFakeDataFields = [];

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _websiteManagementService: WebsiteManagementService,
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _visitorToolsService: VisitorToolsService
  ) {
    super();

    this.websiteCtrl.setValue({
      id: '',
      name: ''
    });

    this.loadAvatarsByOption(1);
    this.selectedPosition = this.positionOptions[0];
    this.selectedShape = this.shapeOptions[0];
    this.sampleTitle = this.mapFakeData(this.contentConfig.title);
    this.sampleBody = this.mapFakeData(this.contentConfig.body);
  }

  ngOnInit() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);
  }

  onChangeAutoDisplayTime(e: MatSliderChange) {
    this.displayConfig.autoDisplayTime = e.value;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selectedTitleFakeDataFields, event.previousIndex, event.currentIndex);
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

  removeSelectedFakeDataField(index: number, option: number) {
    //Title
    if (option === 1) {
      let list = this.selectedTitleFakeDataFields.filter((item, i) => i !== index);
      this.selectedTitleFakeDataFields = list;
    }

    //Body
    if (option === 2) {
      let list = this.selectedBodyFakeDataFields.filter((item, i) => i !== index);
      this.selectedBodyFakeDataFields = list;
    }
  }

  onInputFakeDataText(text: string, data: any) {
    const { option, index } = data;

    //Title
    if (option === 1)
      this.selectedTitleFakeDataFields[index]['text'] = text;

    //Body
    if (option === 2)
      this.selectedBodyFakeDataFields[index]['text'] = text;
  }

  onInputContent(e, opt: number) {
    const text = e.target.value;

    // Title
    if (opt === 1) {
      this.contentConfig.title = text;
      this.sampleTitle = this.mapFakeData(this.contentConfig.title);
    }

    // Body
    if (opt === 2) {
      this.contentConfig.body = text;
      this.sampleBody = this.mapFakeData(this.contentConfig.body);
    }
  }

  onSelectFakeDataField(field: any, option: number) {

    const selectedField = field.fieldName;

    //Title
    if (option === 1) {
      // if (!_.find(this.selectedTitleFakeDataFields, item => item.value === field.value))
      // this.selectedTitleFakeDataFields.push(field);
      this.contentConfig.title += selectedField;
      this.sampleTitle = this.mapFakeData(this.contentConfig.title);
    }

    //Body
    if (option === 2) {
      // if (!_.find(this.selectedBodyFakeDataFields, item => item.value === field.value))
      // this.selectedBodyFakeDataFields.push(field);
      this.contentConfig.body += selectedField;
      this.sampleBody = this.mapFakeData(this.contentConfig.body);
    }
  }

  clearAllSelectedFakeData(option: number) {
    //Title
    if (option === 1) {
      // this.selectedTitleFakeDataFields = [];
      this.contentConfig.title = '';
      this.sampleTitle = '';
    }

    //Body
    if (option === 2)
      // this.selectedBodyFakeDataFields = [];
      this.contentConfig.body = '';
    this.sampleBody = '';
  }

  generateFakeCustomerConfig(opt: number): FakeCustomerDisplayConfig | FakeCustomerContentConfig | FakeCustomerStyleConfig | null {
    if (opt === 1)
      return this.displayConfig;

    if (opt === 2)
      return this.contentConfig;

    if (opt === 3)
      return this.styleConfig;

    return null;
  }

  mapFakeData(text: string) {
    const mappedText = text
      .replace(/#fake_name/g, 'Tue Vo')
      .replace(/#fake_phone/g, '0932 659 211')
      .replace(/#fake_email/g, 'tuevo.it@gmail.com')
      .replace(/#fake_location/g, '31 Vo Van Tan');

    return mappedText;
  }

  applyFakeCustomerConfig(opt: number): any {
    const params = this.generateFakeCustomerConfig(opt);
    if (params) {
      console.log(params);
    }
  }

  onInputPageUrl(e: any) {
    this.contentConfig.pageUrl = e.target.value;
  }

  onCheckEnableDisplayToggle(e: MatSlideToggleChange) {
    this.displayConfig.isEnabled = e.checked;
  }

  onSelectThemeColor(e: any) {
    this.styleConfig.themeColor = e.color.hex;
  }

  onSelectPositionOption(value: number) {
    for (const opt of this.positionOptions)
      if (opt.value === value) {
        opt.selected = true;
        this.selectedPosition = opt;
      }
      else opt.selected = false;

    this.displayConfig.positionOnPage = value;
  }

  onSelectAvatarOption(e: MatRadioChange) {
    for (const option of this.avatarOptions)
      if (option.value === e.value)
        option.checked = true;
      else option.checked = false;

    this.contentConfig.avatarType = e.value;
    this.loadAvatarsByOption(e.value);
  }

  onSelectShapeOption(e: MatRadioChange) {
    for (const option of this.shapeOptions)
      if (option.value === e.value) {
        option.checked = true;
        this.selectedShape = option;
      }
      else option.checked = false;

    this.styleConfig.shape = e.value;
  }

  onSelectRunningDeviceCheckBox(e: MatCheckboxChange, value: number) {
    const checkedDevice = _.find(this.displayConfig.runningDevices, d => d.value === value);
    checkedDevice.checked = e.checked;
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
