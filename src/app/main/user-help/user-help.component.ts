import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import * as _ from 'lodash';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
  selector: 'app-user-help',
  templateUrl: './user-help.component.html',
  styleUrls: ['./user-help.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class UserHelpComponent extends PageBaseComponent implements OnInit, OnDestroy, AfterViewInit {
  animationDirection: 'left' | 'right' | 'none';
  courseStepContent: any;
  currentStep: number;

  demoSteps = [
    {
      'id': 'tp2S0PwPHtDqMfvx',
      'title': 'Hướng dẫn sử dụng công cụ',
      'content': '<h1></h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        'To moderate the images we\'ll need a few Node.js packages:' +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.'
    },
    {
      'id': 'fI10j2DfAFexKoOQ',
      'title': 'Hướng dẫn chấp nhận quyền quản lý hệ thống từ Google Ads',
      'content': '<h1></h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        'To moderate the images we\'ll need a few Node.js packages:' +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.'
    }
  ];
  course: any;

  @ViewChildren(FusePerfectScrollbarDirective)
  fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

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
    private _fuseProgressBarService: FuseProgressBarService
  ) {
    super();

    // Set the defaults
    this.animationDirection = 'none';
    this.currentStep = 0;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
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


    this.onGettingPathParams();
    this.onListAccountsLoaded();
  }

  onGettingPathParams() {
    const sub = this._activedRoute.params
      .subscribe((params: any) => {
        const { problemId } = params;
        const problemIndex = _.findIndex(this.demoSteps, step => step.id === problemId);

        if (problemIndex < 0)
          return this._router.navigateByUrl('/danh-sach-tai-khoan');

        this.currentStep = problemIndex;

      });
    this.subscriptions.push(sub);
  }

  onListAccountsLoaded() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId)
          this._fuseProgressBarService.hide();
        else this._fuseProgressBarService.show();
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
