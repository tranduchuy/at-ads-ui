import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect, MatSlideToggleChange, MatRadioChange } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { SessionService } from 'app/shared/services/session.service';
import { VisitorToolsService } from '../visitor-tools.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';
import { invalidPhoneNumberValidator } from 'app/shared/validators/phone-number.validator';

interface SelectedWebsite {
  id: string;
  name: string;
  isPopupOpening: boolean;
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

  images = [];

  popupDisplayEnableSlideToggle = {
    label: 'Hiển thị nút mở popup',
    color: 'accent',
    checked: false,
    disabled: false
  };

  openPopupButtonPositionStyle: number;
  openPopupButtonPositions: any = [
    {
      name: 'Dưới - Trái',
      value: 1,
      checked: false,
      style: 'bottom-left'
    },
    {
      name: 'Dưới - Phải',
      value: 2,
      checked: false,
      style: 'bottom-right'
    },
    {
      name: 'Giữa - Phải',
      value: 3,
      checked: false,
      style: 'center-right'
    },
    {
      name: 'Giữa - Trái',
      value: 4,
      checked: false,
      style: 'center-left'
    },
    {
      name: 'Trên - Trái',
      value: 5,
      checked: false,
      style: 'top-left'
    },
    {
      name: 'Trên - Phải',
      value: 6,
      checked: false,
      style: 'top-right'
    }
  ];

  autoDisplayPopupSlideToggle = {
    label: 'Tự động hiển thị popup khi vào trang',
    color: 'accent',
    checked: false,
    disabled: false
  };

  displayPopupBeforeExitPageToggle = {
    label: 'Tự động hiển thị popup trước khi thoát trang',
    color: 'accent',
    checked: false,
    disabled: false
  };

  autoDisplayPopupTimeOptions = [
    {
      name: 'Sau mỗi 5 phút',
      value: 5,
      checked: false
    },
    {
      name: 'Sau mỗi 10 phút',
      value: 10,
      checked: false
    },
    {
      name: 'Sau mỗi 15 phút',
      value: 15,
      checked: false
    },
  ];

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<SelectedWebsite[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  popupStyleForm: FormGroup;

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _websiteManagementService: WebsiteManagementService,
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _visitorToolsService: VisitorToolsService
  ) {
    super();

    for (let i = 11; i <= 30; i++)
      this.images.push(`//w.cokhach.com/assets/images/background/popup-bg-${i}.jpg`);
  }

  ngOnInit() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    this.initForms();

    // themeColor: config.themeColor,
    //     supporterAvatar: config.supporter.avatar,
    //     supporterName: config.supporter.name,
    //     supporterMajor: config.supporter.major,
    //     supporterPhone: config.supporter.phone,
    //   };

    //   popupDisplayConfig = {
    //     popupPosition: config.popupPosition,
    //     autoShowPopupRepeatTime: config.autoShowPopupRepeatTime,
    //     autoShowPopup: config.autoShowPopup

    this.websiteCtrl.setValue({
      id: '',
      name: '',
      isPopupOpening: false,
      popupConfig: {
        themeColor: '#2196f3',
        popupPosition: this.openPopupButtonPositions[0].value,
        autoShowPopupRepeatTime: this.autoDisplayPopupTimeOptions[0].value,
        autoShowPopup: false,
        supporter: {
          name: 'Nguyễn Thị A',
          major: 'Hỗ trợ viên',
          phone: '0999999999'
        }
      }
    });
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);
  }

  onCheckPopupDisplayEnableSlideToggle(e: MatSlideToggleChange) {
    this.websiteCtrl.value.isPopupOpening = e.checked;
    this.setPopupDisplay({ popupStatus: e.checked });
  }

  onCheckAutoDisplayPopupSlideToggle(e: MatSlideToggleChange) {
    this.setPopupDisplay({ autoShowPopup: e.checked });
  }

  changeOpenPopupButtonPosition(e: MatRadioChange) {
    this.setPopupDisplay({ popupPosition: e.value });
    // for (const item of this.openPopupButtonPositions) {
    //   if (item.value === e.value) {
    //     item.checked = true;
    //     this.openPopupButtonPositionStyle = item.value;
    //   } else {
    //     item.checked = false;
    //   }
    // }
  }

  changeAutoDisplayPopupTime(e: MatRadioChange) {
    this.setPopupDisplay({ autoShowPopupRepeatTime: e.value });
  }

  onCheckDisplayPopupBeforeExitPageToggle(e: MatSlideToggleChange) {
    console.log(e.checked);
  }

  setPopupDisplay(property: any) {
    const sub = this._visitorToolsService.setPopupDislay(property, this.websiteCtrl.value.id)
      .subscribe(res => {
        this.setPopupConfig(res.data.popupConfig || null);
      },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  selectColorCircle(e) {
    this.popupStyleForm.controls['themeColor'].setValue(e.color.hex);
  }

  selectSupporterAvatar(url: string) {
    this.popupStyleForm.controls['supporterAvatar'].setValue(url);
  }

  selectWebsite() {
    this.setPopupConfig();
  }

  updateWebsiteInCurrentList(websiteId: string, data: any) {
    const website = _.find(this.websites, w => w.id === websiteId);
    website[data.name] = data.value;
  }

  setPopupConfig(optionalConfig?: any) {
    if (optionalConfig)
      this.websiteCtrl.value.popupConfig = optionalConfig;

    this.popupDisplayEnableSlideToggle.checked = this.websiteCtrl.value.isPopupOpening;

    const config = this.websiteCtrl.value.popupConfig;
    let popupStyleConfig = {}, popupDisplayConfig = {};
    if (config) {
      popupStyleConfig = {
        themeColor: config.themeColor,
        supporterAvatar: config.supporter.avatar,
        supporterName: config.supporter.name,
        supporterMajor: config.supporter.major,
        supporterPhone: config.supporter.phone,
      };

      popupDisplayConfig = {
        popupPosition: config.popupPosition,
        autoShowPopupRepeatTime: config.autoShowPopupRepeatTime,
        autoShowPopup: config.autoShowPopup
      };
    } else {
      popupStyleConfig = {
        themeColor: '#2196f3',
        supporterAvatar: this.images[0],
        supporterName: 'Nguyễn Thị A',
        supporterMajor: 'Hỗ trợ viên',
        supporterPhone: '0999999999',
      };
      this.submitPopupStyleForm(true);
    }

    //set popup style config
    for (const key in popupStyleConfig) {
      this.popupStyleForm.controls[key].setValue(popupStyleConfig[key]);
    }

    this.setPopupDisplayConfig(popupDisplayConfig);
  }

  setPopupDisplayConfig(popupDisplayConfig: any) {
    //Automatically initialize popup display config values if they have not been initialized yet
    if (!popupDisplayConfig.popupPosition) {
      this.setPopupDisplay({ popupPosition: this.openPopupButtonPositions[1].value });
      this.websiteCtrl.value.popupConfig['popupPosition'] = this.openPopupButtonPositions[1].value;
    }
    if (!popupDisplayConfig.autoShowPopupRepeatTime) {
      this.setPopupDisplay({ autoShowPopupRepeatTime: this.autoDisplayPopupTimeOptions[0].value });
      this.websiteCtrl.value.popupConfig['autoShowPopupRepeatTime'] = this.autoDisplayPopupTimeOptions[0].value;
    }
    if (popupDisplayConfig.autoShowPopup === undefined) {
      this.setPopupDisplay({ autoShowPopup: false });
      this.websiteCtrl.value.popupConfig['autoShowPopup'] = false;
    }

    this.autoDisplayPopupSlideToggle.checked = this.websiteCtrl.value.popupConfig['autoShowPopup'];

    for (const item of this.openPopupButtonPositions) {
      if (item.value === this.websiteCtrl.value.popupConfig['popupPosition']) {
        item.checked = true;
        this.openPopupButtonPositionStyle = item.value;
      } else {
        item.checked = false;
      }
    }

    for (const item of this.autoDisplayPopupTimeOptions) {
      if (item.value === this.websiteCtrl.value.popupConfig['autoShowPopupRepeatTime']) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    }
  }

  changePopupStyleFormControlValue(value: string, controlName: string) {
    this.popupStyleForm.controls[controlName].setValue(value);
  }

  initForms() {
    this.popupStyleForm = new FormGroup({
      themeColor: new FormControl('#2196f3'),
      supporterAvatar: new FormControl(this.images[0]),
      supporterName: new FormControl('Nguyễn Thị A', [
        Validators.required
      ]),
      supporterMajor: new FormControl('Hỗ trợ viên'),
      supporterPhone: new FormControl('0999999999', [
        Validators.required,
        invalidPhoneNumberValidator
      ])
    });
  }

  get supporterName(): AbstractControl {
    return this.popupStyleForm.get('supporterName');
  }

  get supporterPhone(): AbstractControl {
    return this.popupStyleForm.get('supporterPhone');
  }

  generatePopupStyleParams(): any | null {
    const params = {
      ...this.popupStyleForm.value
    };

    for (const key in params)
      if (!params[key])
        return null;

    return params;
  }

  submitPopupStyleForm(isInit: boolean) {
    const popupStyleParams = this.generatePopupStyleParams();
    if (!popupStyleParams) {
      this._dialogService._openErrorDialog({ messages: ['Vui lòng điền đầy đủ thông tin'] });
      return;
    }

    this._fuseProgressBarService.show();
    const sub = this._visitorToolsService.updatePopupConfig(popupStyleParams, this.websiteCtrl.value.id)
      .subscribe((res: any) => {
        this.setPopupConfig(res.data.popupConfig || null);
        this._fuseProgressBarService.hide();

        if (!isInit) {
          this._dialogService._openSuccessDialog({
            messages: [`
              <center>
                Thiết lập thành công!
                <br>Kiểm tra website của bạn <a href="${this.websiteCtrl.value.name}" target="_blank">tại đây</a>
              </center>
            `]
          });
        }
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();

          if (!isInit) {
            this._dialogService._openErrorDialog(error.error);
          }
        });
    this.subscriptions.push(sub);
  }

  numberWithSpaces(value: string, pattern: string) {
    let i = 0, phone = value.toString();
    return pattern.replace(/#/g, (_: any) => phone[i++]);
  }

  getWebsites(accountId: string) {
    const sub = this._websiteManagementService.getWebsites(accountId)
      .subscribe(res => {
        this.websites = (res.data.website || []).map(website => {
          return {
            id: website._id,
            name: website.domain,
            isPopupOpening: website.isPopupOpening || false,
            popupConfig: website.popupConfig || null
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
          this.setPopupConfig();

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
