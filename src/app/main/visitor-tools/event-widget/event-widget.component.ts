import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation, ViewChild, AfterContentInit, HostListener } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import * as _ from 'lodash';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { MatGridList, MatSelect } from '@angular/material';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

interface Website {
  id: string;
  name: string;
}

interface WidgetSize {
  width: string;
  height: string;
}

interface Widget {
  name: string;
  sampleTemplate: string;
  sampleImage: string;
  code: string;
  category: string;
  components: any[];
  size: any
}

@Component({
  selector: 'app-event-widget',
  templateUrl: './event-widget.component.html',
  styleUrls: ['./event-widget.component.scss'],
  animations: fuseAnimations
})
export class EventWidgetComponent extends PageBaseComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  animationDirection: 'left' | 'right' | 'none';
  courseStepContent: any;
  currentStep: number;
  isWidgetSampleShown: boolean = false;
  websites: Website[] = [];
  hasWebsite: boolean;
  isProcessing: boolean;
  course: any;

  widgetCategories = ['ALL', 'BANNER_SALES', 'CONTACT_FORM'];

  toggleMenuCheckList = [];
  widgetWidth: string = '0';
  widgetHeight: string = '0';
  widgetsDataSource: Widget[] = [];
  widgets: Widget[] = [
    {
      name: 'Mẫu 1',
      sampleTemplate: `
      <html class="wf-playfairdisplay-n4-active wf-quicksand-n4-active wf-active"><head>
      <title>Widget Content</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script><script src="https://themes.trazk.com/master/js/jquery.js"></script>
      <script src="https://themes.trazk.com/master/js/rebuildData.js"></script>
      <!-- <script src="https://themes.trazk.com/master/js/validate.js"></script> -->
      <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
      <script src="https://themes.trazk.com/master/js/widgetsConfig.js"></script>
      <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/master/css/style.css">
      <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/003/013/css/style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display%7CQuicksand" media="all">
      </head>
      <body>
      <div class="container widgetPosition_center" id="container">
      <div class="salebanner-component-7 content_header_background_color-2 widgetBg" style="background-color: rgb(255, 0, 0); background-image: url(&quot;<!-- BACKGROUND_IMAGE -->&quot;); background-position: center top;">
      <form class="main-salebanner formStep1" novalidate="novalidate">
        <div class="cick-to-call-header-img widgetAvata" id="field-content_avatar" src="https://image.flaticon.com/icons/png/128/205/205702.png" style="display: none;">
          <img class="widgetAvata" src="https://image.flaticon.com/icons/png/128/205/205702.png" style="display: none;">
        </div>
        <div class="content-salebanner-1 font-tilte-1 widgetTitle" style="font-family: &quot;Playfair Display&quot;; font-size: 38px; color: rgb(255, 244, 237);">Happy&nbsp; Woman Day</div>
        <div class="content-salebanner-2 font-tilte-2 widgetTitlemini" style="font-family: Quicksand; font-size: 16px; color: rgb(250, 250, 250);">&nbsp;Nhận ngay mã giảm 50%&nbsp; &amp; miễn phí giao&nbsp; hàng</div>
        <div class="form-email">
          <input type="text" name="email" class="banner-email inputEmail widgetTextbox" placeholder="Nhập email của bạn" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">
          <button type="submit" class="button-send font-button-send widgetButton widgetBuble" style="color: rgb(255, 255, 255); background-color: rgb(247, 63, 122);"><i class="fas fa-gift" id="bubble-icon" style="color: rgb(255, 255, 255);"></i></button>
        </div>
      </form>
      <div class="formStep2 hiddenAll">
        <img class="img-check" src="https://themes.trazk.com/003/013/images/check_mark.png" alt="">
        <p class="thanks">Cảm ơn bạn đã để lại thông tin</p>
      </div>
      </div>
  
        <style>
          .widgetPowerBy::before { background: url("https://www.svgrepo.com/show/200115/lightning-thunder.svg") }
          .widgetPowerBy::after { content: 'by x2.com.vn' }
        </style>
        <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>
  
      </div>
      </body></html>
      `,
      sampleImage: 'https://f.trazk.com/userfiles/uploads/201912/b711f62a611edbecd70fdd6b78b1f3a4.png',
      category: 'CONTACT_FORM',
      code: 'CONTACT_FORM_mau1',
      components: [
        {
          name: 'Hình nền',
          type: 'BACKGROUND_IMAGE',
          url: 'https://f.trazk.com/userfiles/uploads/201912/61d422107b1e54d755d9d63b8079c2c3.png'
        }
      ],
      size: {
        pc: {
          width: '30em',
          height: '21.875em'
        },
        mobile: {
          width: '22.5em',
          height: '21.875em'
        }
      },
    },
    //   {
    //     name: 'Mẫu 2',
    //     sampleTemplate: `
    //     <html class="wf-quicksand-n4-active wf-dancingscript-n4-active wf-active"><head>
    //     <title>Widget Content</title>
    //     <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    //     <script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script><script src="https://themes.trazk.com/master/js/jquery.js"></script>
    //     <script src="https://themes.trazk.com/master/js/rebuildData.js"></script>
    //     <script src="https://themes.trazk.com/master/js/widgetsConfig.js"></script>
    //     <!-- <script src="https://themes.trazk.com/master/js/validate.js"></script> -->
    //     <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
    //     <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/master/css/style.css">
    //     <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/002/009/css/style.css">
    //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script%7CQuicksand" media="all">
    // </head>
    // <body>
    //   <div class="container widgetPosition_center" id="container">
    //     <div class="banner-3-container widgetBg" style="background-image: url(&quot;https://f.trazk.com/userfiles/uploads/201912/596f9f4c183cafdf3c1498928c394ca8.jpeg&quot;);">
    //       <div class="banner-images-3 ">
    //           <img class="widgetProduct" src="https://f.trazk.com/userfiles/uploads/201912/596f9f4c183cafdf3c1498928c394ca8.jpeg" alt="" style="display: none;">
    //         </div>
    //     <form class="banner-text-3 formStep1" novalidate="novalidate">
    //       <h1 class="banner-3-title widgetTitle" id="field-content_title" style="font-family: &quot;Dancing Script&quot;; font-size: 39px; color: rgb(255, 86, 138); background-color: transparent;"><div style="text-align: center;"><b>Một nửa yêu thương</b></div></h1>
    //       <p class="banner-3-des widgetDes" id="field-content_description" style="font-family: Quicksand; font-size: 15px; color: rgba(76, 55, 55, 0.95);"><div><b>Mừng 8/3 tặng ngay mã giảm giá 70% cho đơn hàng trên 1.000.000VND</b></div></p>

    //         <div class="banner-input-user">
    //           <div class="icon">
    //             <i class="fas fa-user"></i>
    //           </div>
    //           <input type="text" name="name" class="banner-user widgetInputFullname inputName displayBlock" placeholder="Tên của bạn">
    //         </div>
    //         <div class="banner-input-email">
    //           <div class="icon">
    //             <i class="fas fa-envelope"></i>
    //           </div>
    //           <input type="phone" name="phone" class="banner-email widgetInputEmail inputPhone displayBlock" placeholder="Email của bạn">
    //         </div>
    //         <button type="submit" target="_blank" class="banner-3-button widgetSendButton className" style="color: rgb(255, 254, 254); background-color: rgb(255, 89, 146);">Đăng ký</button>
    //       </form>

    //         <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
    //         <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

    //         <div class="formStep2 hiddenAll">
    //           <div class="success-check animated bounce"> 
    //             <img class="images-check" src="https://themes.trazk.com/003/013/images/check_mark.png" alt="">
    //             </div>
    //             <p class="thanks">Cảm ơn bạn đã để lại thông tin</p>
    //         </div>

    //         <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
    //         <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

    //     </div>
    //   </div>

    // </body></html>
    //     `,
    //     sampleImage: 'https://f.trazk.com/userfiles/uploads/201912/2bf2277f5e52bbf4603ae89ed2d08cda.png',
    //     category: 'CONTACT_FORM',
    //     code: 'CONTACT_FORM_mau2',    // CATEGORY_name
    //     components: [],
    //     size: {
    //       width: '37.5em',
    //       height: '23.75em'
    //     }
    //   },
    //   {
    //     name: 'Mẫu 2',
    //     sampleTemplate: `
    //     <html><head>
    //     <title>Widget Content</title>
    //     <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    //     <script src="https://themes.trazk.com/master/js/jquery.js"></script>
    //     <script src="https://themes.trazk.com/master/js/rebuildData.js"></script>
    //     <script src="https://themes.trazk.com/master/js/widgetsConfig.js"></script>
    //     <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/master/css/style.css">
    //     <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/002/005/css/style.css">
    //     </head>
    //     <body>
    //     <div class="container widgetPosition_center" id="container">
    //     <div class="banner-2-container widgetBg" id="field-content_fake_background" style="background-color: rgb(255, 73, 73); background-image: url(&quot;https://f.trazk.com/userfiles/uploads/202002/d1edc10e5851ef425add59bad98ac1d0.png&quot;); background-position: center center;">
    //       <div class="button-banner-2">
    //         <a class="content-banner-href widgetButton" target="_top" href="https://fff.com.vn" style="color: rgba(255, 255, 255, 0.95); background-color: rgb(172, 104, 66);">Xem ngay</a>

    //       </div>

    //       <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
    //       <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

    //     </div>
    //     </div>


    //     </body></html>
    //     `,
    //     sampleImage: 'https://f.trazk.com/userfiles/uploads/202002/8f76eedcfc63da35d2fbab00abe57e76.png',
    //     category: 'BANNER_SALES',
    //     code: 'BANNER_SALES_mau2',    // CATEGORY_name
    //     components: [],
    //     size: {
    //       width: '23.125em',
    //       height: '37.5em'
    //     }
    //   },
    //   {
    //     name: 'Mẫu 3',
    //     sampleTemplate: `
    //     <html class="wf-quicksand-n4-active wf-chonburi-n4-active wf-itim-n4-active wf-active"><head>
    //     <title>Widget Content</title>
    //     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    //     <script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script><script src="https://trazk.vncdn.vn/master/js/jquery.js"></script>
    //     <script src="https://trazk.vncdn.vn/master/js/rebuildData.js"></script>
    //     <script src="https://trazk.vncdn.vn/master/js/widgetsConfig.js"></script>
    //     <link rel="stylesheet" type="text/css" href="https://trazk.vncdn.vn/master/css/style.css">
    //     <link rel="stylesheet" type="text/css" href="https://themes.trazk.com/003/038/css/style.css">
    //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chonburi%7CItim%7CQuicksand" media="all">
    // </head>
    // <body>
    //   <div class="container widgetPosition_center" id="container">
    //   <div class="salebanner-component-38 content_header_background_color-2 widgetBg">
    //     <div class="main-salebanner widgetImage">
    //       <div class="group">
    //         <div class="content-salebanner-1 widgetTitle" style="font-family: Chonburi; font-size: 23px; color: rgb(6, 6, 6);">&nbsp; &nbsp; <i>&nbsp; 40% off</i></div>

    //         <div class="content-salebanner-3 widgetContent" style="font-family: Itim; font-size: 25px; color: rgba(11, 33, 155, 0.8);">Happy woman day</div>
    //         <div class="content-salebanner-4 widgetContent-1" style="font-family: Quicksand; font-size: 16px; color: rgb(0, 0, 0);"><div>Nhận ngay voucher 500k&nbsp;</div><div>cho phái nữ đến mua hàng</div></div>
    //         <button class="button-send font-button-send widgetButton" href="https://www.fff.com.vn/" target="_top" style="color: rgb(249, 247, 247); background-color: rgb(255, 0, 136);">Xem ngay</button>


    //       </div>
    //     </div>

    //     <style>.widgetPowerBy::after { content: 'by x2.com.vn' }</style>
    //     <a target="_blank" id="poweredByCompany" href="https://x2.com.vn" class="widgetPowerBy widgetPowerByDark"></a>

    //     </div>
    // </div></body></html>
    //     `,
    //     sampleImage: 'https://f.trazk.com/userfiles/uploads/202002/c8f8887952aea97ad18260a949d6248d.png',
    //     category: 'BANNER_SALES',
    //     code: 'BANNER_SALES_mau3',    // CATEGORY_name
    //     components: [],
    //     size: {
    //       width: '28.125em',
    //       height: '37.75em'
    //     }
    //   }
  ]

  demoSteps = [
    {
      'title': 'Tất cả thể loại',
    },
    {
      'title': 'Banner Sales',
    },
    {
      'title': 'Form liên hệ',
    },
  ];

  gridByBreakpoint = {
    xl: 4,
    lg: 3,
    md: 3,
    sm: 3,
    xs: 1
  }

  @ViewChildren(FusePerfectScrollbarDirective)
  fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

  @ViewChild('grid', { static: true }) grid: MatGridList;
  cols: Subject<any> = new Subject();

  @HostListener('document:keydown.escape', ['$event'])
  handlePressingEscape(e: KeyboardEvent) {
    if (this.isWidgetSampleShown)
      this.isWidgetSampleShown = false;
  }

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<Website[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AcademyCourseService} _academyCourseService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {FuseSidebarService} _fuseSidebarService
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseSidebarService: FuseSidebarService,
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _observableMedia: MediaObserver,
    private _websiteManagementService: WebsiteManagementService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _dialogService: DialogService
  ) {
    super();

    // Set the defaults
    this.animationDirection = 'none';
    this.currentStep = 0;

    // Set the private defaults
    this._unsubscribeAll = new Subject();

    this.widgetsDataSource = this.widgets.map(item => item);
    this.toggleMenuCheckList = this.widgets.map(() => ({ isToggled: false }));
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.course = {
      'id': '15459251a6d6b397565',
      'title': 'Trợ giúp người dùng',
      'slug': 'basics-of-angular',
      'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'category': 'web',
      'length': 30,
      'totalSteps': 11,
      'updated': 'Jun 28, 2017',
      'steps': this.demoSteps
    };

    this.onListAccountsLoaded();
  }

  filterListCategories(filterValue: string) {
    this.currentStep = 0;

    if (!filterValue) {
      this.course.steps = this.demoSteps.map(item => item);
    } else {
      this.course.steps = this.demoSteps.filter(item => item.title.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
    }
  }

  makeUpWidget(data: Widget): Widget {
    let { sampleTemplate, category, code, components, size } = data;

    let textIndexes = [];

    for (const i in components) {

      switch (components[i].type) {
        case 'TEXT':
          textIndexes.push(i);
          break;

        case 'BUTTON':
          const re1 = new RegExp(`<!-- BUTTON_URL -->`, 'g');
          const re2 = new RegExp(`<!-- BUTTON_TEXT -->`, 'g');
          sampleTemplate = sampleTemplate
            .replace(re1, components[i].url)
            .replace(re2, components[i].text);
          break;

        case 'BACKGROUND_IMAGE':
          const re = new RegExp(`<!-- BACKGROUND_IMAGE -->`, 'g');
          sampleTemplate = sampleTemplate.replace(re, components[i].url);
          break;

        default:
          break;
      }

    }

    textIndexes.forEach((index, count) => {
      const re = new RegExp(`<!-- TEXT_${count} -->`, 'g');
      sampleTemplate = sampleTemplate.replace(re, components[index].text);
    });

    return {
      sampleTemplate,
      category,
      code,
      components,
      size
    } as Widget;
  }

  getWebsites(accountId: string) {
    const sub = this._websiteManagementService.getWebsites(accountId)
      .subscribe(res => {
        this.websites = (res.data.website || []).map(website => {
          return {
            id: website._id,
            name: website.domain
          } as Website
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

  loadWidgetSampleIframe(template: string) {
    let iframe = document.getElementById('event-widget-sample-iframe');
    let doc = (<HTMLIFrameElement>iframe).contentDocument || (<HTMLIFrameElement>iframe).contentWindow.document;
    doc.open();
    doc.write(template);
    doc.close();
  }

  ngAfterContentInit() {
    this._observableMedia.asObservable().subscribe((change: MediaChange[]) => {
      this.cols.next(this.gridByBreakpoint[change[0].mqAlias]);
    });
  }

  onClickBtnCloseWidgetSample() {
    this.isWidgetSampleShown = false;
  }

  onClickBtnShowWidgetSample(widgetIndex: number) {
    const widget = this.makeUpWidget(this.widgets[widgetIndex]);
    const { sampleTemplate, size } = widget;

    this.loadWidgetSampleIframe(sampleTemplate);

    if (size) {
      const windowSize = window.innerWidth;
      
      let realSize: any;
      if (windowSize < 600)
        realSize = Object.assign({}, size.mobile);
      else realSize = Object.assign({}, size.pc);

      this.widgetWidth = realSize.width || '0';
      this.widgetHeight = realSize.height || '0';
    }

    this.isWidgetSampleShown = true;
  }

  onListAccountsLoaded() {
    const sub = this._sessionService.getListAccounts()
      .subscribe(listAccounts => {
        if (listAccounts) {
          this.getAccountId();
        } else {
          this._fuseProgressBarService.show();
        }
      });
    this.subscriptions.push(sub);
  }

  getAccountId() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    this.courseStepContent = this.fuseScrollbarDirectives.find((fuseScrollbarDirective) => {
      return fuseScrollbarDirective.elementRef.nativeElement.id === 'course-step-content';
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Go to step
   *
   * @param step
   */
  gotoStep(step): void {
    // Decide the animation direction
    this.animationDirection = this.currentStep < step ? 'left' : 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Set the current step
    this.currentStep = step;

    const category = this.widgetCategories[this.currentStep];
    if (category === 'ALL')
      this.widgets = this.widgetsDataSource.map(item => item);
    if (category === 'BANNER_SALES')
      this.widgets = this.widgetsDataSource.filter(item => item.category === 'BANNER_SALES');
    if (category === 'CONTACT_FORM')
      this.widgets = this.widgetsDataSource.filter(item => item.category === 'CONTACT_FORM');
  }

  /**
   * Go to next step
   */
  gotoNextStep(): void {
    if (this.currentStep === this.course.totalSteps - 1) {
      return;
    }

    // Set the animation direction
    this.animationDirection = 'left';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Increase the current step
    this.currentStep++;
  }

  /**
   * Go to previous step
   */
  gotoPreviousStep(): void {
    if (this.currentStep === 0) {
      return;
    }

    // Set the animation direction
    this.animationDirection = 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Decrease the current step
    this.currentStep--;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }
}

