import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Subject, ReplaySubject, combineLatest, pipe } from 'rxjs';
import { takeUntil, distinctUntilChanged, first, takeLast, take, distinct, single, last } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { DialogService } from 'app/shared/services/dialog.service';
import { ToolbarService } from './toolbar.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';
import { AdwordsAccountsService } from 'app/shared/services/ads-accounts/adwords-accounts.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

export interface ChangingListAccountsAction {
    status: 'SUCCESS' | 'ERROR' | 'INFO',
    data: any
}

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent extends PageBaseComponent implements OnInit, OnDestroy {
    adminIsStandingForUser = false;
    standBy: any = {};
    user: any = {};
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    isProcessing = false;
    isAlertDisplayed = false;
    isAccountSelectionDisplayed = false;
    accountConnectTypes = [];

    adsAccounts = [];

    /** control for selected account */
    public accountCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    public accountFilterCtrl: FormControl = new FormControl();

    /** list of accounts filterd by search keyword */
    public filteredAccounts: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

    private _onDestroy = new Subject<void>();

    // Private
    private _unsubscribeAll: Subject<any>;

    _adsAccountPipe: AdsAccountIdPipe = new AdsAccountIdPipe();

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        public _sessionService: SessionService,
        private _router: Router,
        private _dialogService: DialogService,
        private _toolbarService: ToolbarService,
        private _fuseProgressiveBarService: FuseProgressBarService,
        private _adwordsAccountService: AdwordsAccountsService,
        private _fuseNavigationService: FuseNavigationService
    ) {
        super();

        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon: 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon: 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon: 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            }
        ];

        this.navigation = navigation;

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
        const loggedInUser = this._sessionService.user;
        if (!loggedInUser)
            return;

        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });

        // if (this._sessionService.user) {
        //     this._sessionService.setUser(JSON.parse(this._sessionService.user));
        // }

        const sub = combineLatest([
            this._sessionService.getUser(),
            this._sessionService.getStandByUser$()
        ]).subscribe((values: any[]) => {
            const user = values[0];
            if (user) {
                this.user.name = user.name;
                this.user.avatar = user.avatar;
                this.user.email = user.email;
                this.user.licence = user.licence;
                this.adminIsStandingForUser = false;
            }

            if (values[1]) {
                this.adminIsStandingForUser = true;
                this.standBy.name = values[1].name;
                this.standBy.avatar = values[1].avatar || '';
                this.standBy.email = values[1].email;
            }
        });
        this.subscriptions.push(sub);

        this.getAdsAccounts();
        this.listenOnListAccountsChanged();
    }

    listenOnListAccountsChanged() {
        const sub = this._sessionService.onListAccountsChanged()
            .subscribe(value => {
                if (value) {
                    if (typeof value === 'object') {
                        this.getAdsAccounts(value);
                    }
                    else {
                        this.getAdsAccounts();
                    }
                }
            });
        this.subscriptions.push(sub);
    }

    getAdsId() {
        const getAdsIdSub = this._sessionService.getAdwordId()
            .subscribe((adsId: string) => {
                if (adsId) {
                    this.accountCtrl.setValue(this.adsAccounts.find(account => account.name === adsId));

                    if (this.accountConnectTypes[adsId] === 'GOOGLE_ADS_ID') {
                        this.checkAccountAcceptance();
                    }
                }
                else {
                    this.isAlertDisplayed = false;
                }
            });
        this.subscriptions.push(getAdsIdSub);
    }

    onRemovingAccount() {
        const onRemovingAccountSub = this._sessionService.onRemovingAccount()
            .subscribe((accountId: string) => {
                if (accountId) {

                    _.remove(this.adsAccounts, account => account.accountId === accountId);

                    if (this.adsAccounts.length > 0) {
                        this.accountCtrl.setValue(this.adsAccounts[0]);
                        this._sessionService.setActiveGoogleAdsAccount(this.adsAccounts[0].accountId, this.adsAccounts[0].name);
                        this._fuseNavigationService.reloadNavigation();
                    }
                    else {
                        this.isAccountSelectionDisplayed = false;
                        this._fuseNavigationService.reloadNavigation();
                    }
                }
            });
        this.subscriptions.push(onRemovingAccountSub);
    }

    checkAccountAcceptance() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const checkAccountSub = this._toolbarService.checkAccountAcceptance()
            .subscribe(res => {
                this.isAlertDisplayed = !res.data.isConnected;
                this.isProcessing = false;
                this._fuseProgressiveBarService.hide();
            },
                (error: HttpErrorResponse) => {
                    this.isAlertDisplayed = false;
                    this.isProcessing = false;
                    this._fuseProgressiveBarService.hide();
                });
        this.subscriptions.push(checkAccountSub);
    }

    selectAccount(): void {
        this._sessionService.setActiveGoogleAdsAccount(
            this.accountCtrl.value.accountId,
            this._adsAccountPipe.transform(this.accountCtrl.value.adsId)
        );
        this._sessionService.emitSelectedActiveAccount(this.accountCtrl.value.accountId);
    }

    getAdsAccounts(action?: ChangingListAccountsAction): void {
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;

        const sub = this._adwordsAccountService.getAdwordsAccount()
            .pipe()
            .subscribe(res => {
                this.adsAccounts = (res.data.accounts || [])
                    .map((account: any) => {
                        this.accountConnectTypes[this._adsAccountPipe.transform(account.adsId)] = account.connectType;
                        return {
                            name: this._adsAccountPipe.transform(account.adsId)
                                + (account.adsName ? ` (${account.adsName})` : ''),
                            accountId: account.id,
                            adsId: account.adsId,
                            adsName: account.adsName || '',
                            isFree: account.isFree,
                            expiredAt: account.websites.length > 0 ? account.websites[0].expiredAt : new Date(),
                            isConnected: account.isConnected,
                            createdAt: account.createdAt,
                            connectType: account.connectType,
                            websites: account.websites,
                            limitWebsite: account.limitWebsite,
                            configStep: account.configStep
                        };
                    });

                this._fuseProgressiveBarService.hide();
                this._sessionService.setListAccounts(this.adsAccounts);

                if (this.adsAccounts.length === 0) {
                    this.isAccountSelectionDisplayed = false;
                    this._sessionService.unsetActiveGoogleAdsAccount();
                    this._sessionService.completeCheckingIfUserHasAccount(false);
                    this._fuseNavigationService.reloadNavigation();
                    return;
                }

                this._sessionService.completeCheckingIfUserHasAccount(true);

                let activeIndex = 0;

                if (this._sessionService.activeAccountId && this._sessionService.activeAdsAccountId) {
                    activeIndex = _.findIndex(this.adsAccounts, account => account.accountId === this._sessionService.activeAccountId);

                    if (activeIndex < 0)
                        activeIndex = 0;
                }

                this.accountCtrl.setValue(this.adsAccounts[activeIndex]);
                this._sessionService.setActiveGoogleAdsAccount(
                    this.accountCtrl.value.accountId,
                    this._adsAccountPipe.transform(this.accountCtrl.value.adsId)
                );

                // load the initial account list
                this.filteredAccounts.next(this.adsAccounts.slice());

                // listen for search field value changes
                this.accountFilterCtrl.valueChanges
                    .pipe(takeUntil(this._onDestroy))
                    .subscribe(() => {
                        this.filterAccounts();
                    });

                // emit config step value
                this._sessionService.completeConfigStep(this.adsAccounts[activeIndex].configStep);

                this._fuseNavigationService.reloadNavigation();
                this.isAccountSelectionDisplayed = true;
                this.isProcessing = false;

                if (action) {
                    if (action.status === 'SUCCESS') {
                        this._dialogService._openSuccessDialog(action.data);
                    }
                    else if (action.status === 'ERROR') {
                        this._dialogService._openErrorDialog(action.data);
                    }
                }
            },
                (error: HttpErrorResponse) => {
                    this._fuseProgressiveBarService.hide();
                    this.adsAccounts = [];
                    this._sessionService.setListAccounts(this.adsAccounts);
                    this._sessionService.completeCheckingIfUserHasAccount(false);
                    this._sessionService.unsetActiveGoogleAdsAccount();
                    this._fuseNavigationService.reloadNavigation();
                    this.isProcessing = false;
                });
        this.subscriptions.push(sub);
    }

    private filterAccounts(): void {
        if (!this.adsAccounts) {
            return;
        }
        // get the search keyword
        let search = this.accountFilterCtrl.value;
        if (!search) {
            this.filteredAccounts.next(this.adsAccounts.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the accounts
        this.filteredAccounts.next(
            this.adsAccounts.filter(account => account.name.toLowerCase().indexOf(search) > -1)
        );
    }

    updateAccountAcceptance(): void {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();

        const sub = this._toolbarService.checkAccountAcceptance()
            .subscribe(res => {
                this._fuseProgressiveBarService.hide();

                if (res.data.isConnected) {
                    this.isAlertDisplayed = false;
                    this._router.navigateByUrl('/gan-tracking/chien-dich');
                    this._dialogService._openSuccessDialog({ messages: ['Cập nhật quyền quản lý hệ thống tài khoản Google Ads thành công'] });
                }
                else {
                    this.isAlertDisplayed = true;
                    this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                }

                this._sessionService.setAcceptedAdsId();

                this.isProcessing = false;
            },
                (error: HttpErrorResponse) => {
                    this._fuseProgressiveBarService.hide();
                    // this._dialogService._openErrorDialog(error.error);
                    this.isAlertDisplayed = false;
                    this.isProcessing = false;
                });
        this.subscriptions.push(sub);
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
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    logout(): void {
        const openConfirmDialogSub = this._dialogService._openConfirmDialog('Thoát khỏi hệ thống?')
            .subscribe(
                (isAccepted: boolean) => {
                    if (isAccepted) {
                        this._sessionService.remove();
                        this._sessionService.allowNoficationToShow(false);
                        this._sessionService.completeCheckingIfUserHasAccount(true);
                        this._sessionService.setListAccounts(false);
                        this._sessionService.unsetActiveGoogleAdsAccount();
                        this._router.navigate(['/gioi-thieu']);
                    }
                }
            );
        this.subscriptions.push(openConfirmDialogSub);
    }
}
