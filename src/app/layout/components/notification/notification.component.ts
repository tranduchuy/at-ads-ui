import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountsService } from 'app/shared/services/ads-accounts/adwords-accounts.service';
import { Router } from '@angular/router';
import { Generals } from 'app/shared/constants/generals';
import { take } from 'rxjs/operators';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import * as _ from 'lodash';
import { PreviousRouteService } from 'app/shared/services/previous-route.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent extends PageBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper', { static: false }) private stepper: MatStepper;

  isLinear: boolean;
  stepForm1: FormGroup;
  stepForm2: FormGroup;
  stepForm3: FormGroup;
  stepForm4: FormGroup;
  stepForm5: FormGroup;
  stepForms: FormGroup[];
  isNotificationShown: boolean;
  isStepperShown: boolean;
  activedRoute: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _sessionService: SessionService,
    private _adwordsAccountsService: AdwordsAccountsService,
    private _router: Router,
    private _fuseProgressBarService: FuseProgressBarService,
  ) {
    super();

    _router.events
      .pipe(take(1))
      .subscribe((url: any) => {
        this.activedRoute = url.url;
      });
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    this.isNotificationShown = false;
    this.isStepperShown = false;
    //this.initStepForms();
  }

  initStepForms() {
    this.stepForms = [
      this.stepForm1 = this._formBuilder.group({
        step1: ['', Validators.required]
      }),
      this.stepForm2 = this._formBuilder.group({
        step2: ['', Validators.required]
      }),
      this.stepForm3 = this._formBuilder.group({
        step3: ['', Validators.required]
      }),
      this.stepForm4 = this._formBuilder.group({
        step4: ['', Validators.required]
      }),
      this.stepForm5 = this._formBuilder.group({
        step5: ['', Validators.required]
      })
    ];
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.getUser();
      this.checkIfNotificationShown();
    }, 500);
  }

  getUser() {
    const sub = this._sessionService.getUser()
      .pipe(take(1))
      .subscribe(user => {
        if (user) {
          this.getListAccounts();
        }
        else {
          this._sessionService.allowNoficationToShow(false);
          this.isNotificationShown = false;
        }
      });
    this.subscriptions.push(sub);
  }

  getAccountId() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          const activeAccount: any = _.find(
            this._sessionService.getValueOfListAccounts(),
            account => account.accountId === this._sessionService.activeAccountId);
          if (activeAccount) {
            this.initStepForms();
            this._sessionService.completeConfigStep(activeAccount.configStep);
          }
        }
      });
    this.subscriptions.push(sub);
  }

  checkIfNotificationShown() {
    const sub = this._sessionService.checkNotificationShowing()
      .subscribe((isAllowed: boolean) => {
        this.isNotificationShown = isAllowed;
      });
    this.subscriptions.push(sub);
  }

  getListAccounts() {
    const sub = this._sessionService.getListAccounts()
      .subscribe((listAccounts => {
        if (listAccounts) {
          this._sessionService.allowNoficationToShow(true);
          this.isLinear = true;

          setTimeout(() => {
            this.getAccountId();
            this.onConfigStepCompleted();
          }, 500);
        }
      }));
    this.subscriptions.push(sub);
  }

  onConfigStepCompleted() {
    const sub = this._sessionService.onConfigStepCompleted()
      .subscribe((step: number) => {
        if (step >= Generals.AccountConfigStep.CONNECT_ACCOUNT.value && step <= Generals.AccountConfigStep.ADD_WEBSITE.value
        ) {
          this.isStepperShown = true;
          this.updateAccountConfigStep(step);
        }
        else if (step >= Generals.AccountConfigStep.ADD_TRACKING.value && step <= Generals.AccountConfigStep.SEE_REPORT.value
        ) {
          this.isStepperShown = false;
          if (step === Generals.AccountConfigStep.ADD_TRACKING.value) {
            this.updateAccountConfigStep(Generals.AccountConfigStep.SEE_REPORT.value);
          }

          if (step === Generals.AccountConfigStep.SEE_REPORT.value && this._sessionService.getValueOfUserLoginChecker()) {
            this._sessionService.setUserLoginChecker(false);
            this.navigateToStep(Generals.AccountConfigStep.SEE_REPORT.value);
          }
        }
        else if (step === 0) {
          this.isStepperShown = false;
        }
      });
    this.subscriptions.push(sub);
  }

  onClickStepper(e) {
    const stepLabel = e.srcElement.innerText;
    const stepInfo = _.find(Generals.AccountConfigStep, step => stepLabel.includes(step.name));
    if (stepInfo) {
      const stepFormValue = this.stepForms[stepInfo.value - 1].controls[`step${stepInfo.value}`].value;
      if (stepFormValue || stepInfo.value === this._sessionService.getValueOfDoneConfigStep() + 1) {
        this.navigateToStep(stepInfo.value);
      }
    }
  }

  updateAccountConfigStep(step: number) {
    const sub = this._adwordsAccountsService.updateAccountConfigStep({ step })
      .pipe(take(1))
      .subscribe(res => {
        this.goToStep(step + 1);
      });
    this.subscriptions.push(sub);
  }

  goToStep(step: number) {
    const doneStep = this._sessionService.getValueOfDoneConfigStep();
    if (doneStep < Generals.AccountConfigStep.ADD_TRACKING.value) {
      this.stepper.reset();
      for (let i = 0; i < step - 1; i++) {
        this.stepForms[i].controls[`step${i + 1}`].setValue(i + 1);
        this.stepper.next();
      }
    }
    const activeAccountConnection = this._sessionService.getValueOfActiveAccountConnection();
    if (!this._router.url.includes('danh-sach-tai-khoan')) {
      if (activeAccountConnection === 'Connected by id but is not refreshed') {
        if (doneStep > Generals.AccountConfigStep.CONNECT_ACCOUNT.value) {
          this.stepper.next();
          this.navigateToStep(step);
        } else {
          this.stepper.previous();
        }
      } else {
        if (doneStep >= Generals.AccountConfigStep.ADD_TRACKING.value) {
          this.navigateToStep(Generals.AccountConfigStep.SEE_REPORT.value);
        } else {
          this.stepper.next();
          this.navigateToStep(step);
        }
      }
    }
  }

  navigateToStep(step: number) {
    switch (step) {
      case 1:
        this._router.navigateByUrl(Generals.AccountConfigStep.CONNECT_ACCOUNT.route);
        break;
      case 2:
        this._router.navigateByUrl(Generals.AccountConfigStep.SELECT_CAMPAIGN.route);
        break;
      case 3:
        this._router.navigateByUrl(`${Generals.AccountConfigStep.ADD_WEBSITE.route}${this._sessionService.activeAccountId}`);
        break;
      case 4:
        this._router.navigateByUrl(`${Generals.AccountConfigStep.ADD_TRACKING.route}${this._sessionService.activeAccountId}`);
        break;
      case 5:
        this._router.navigateByUrl(`${Generals.AccountConfigStep.SEE_REPORT.route}`);
        break;
      default:
        break;
    }
  }

  onStepperSelectionChanged(e) {
    // const selectedStepIndex = e.selectedIndex + 1;
    // this.navigateToStep(selectedStepIndex);
    // if (
    //   this.activedRoute.includes(Generals.AccountConfigStep.CONNECT_ACCOUNT.route)
    //   || this.activedRoute.includes(Generals.AccountConfigStep.SELECT_CAMPAIGN.route)
    //   || this.activedRoute.includes(Generals.AccountConfigStep.ADD_WEBSITE.route)
    //   || this.activedRoute.includes(Generals.AccountConfigStep.ADD_TRACKING.route)
    //   || this.activedRoute.includes(Generals.AccountConfigStep.SEE_REPORT.route)
    // ) {
    //   this.navigateToStep(selectedStepIndex);
    // }
  }
}
