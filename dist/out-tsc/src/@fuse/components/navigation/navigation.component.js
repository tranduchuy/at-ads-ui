import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { AdwordsAccountsService } from '../../../app/shared/services/ads-accounts/adwords-accounts.service';
import { SessionService } from '../../../app/shared/services/session.service';
import { FuseSplashScreenService } from '../../services/splash-screen.service';
import { AdsAccountIdPipe } from '../../../app/shared/pipes/ads-account-id/ads-account-id.pipe';
let FuseNavigationComponent = class FuseNavigationComponent {
    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseNavigationService} _fuseNavigationService
     */
    constructor(_changeDetectorRef, _fuseNavigationService, _fuseSplashScreenService, _adwordsAccountsService, _sessionService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this._adwordsAccountsService = _adwordsAccountsService;
        this._sessionService = _sessionService;
        this.layout = 'vertical';
        this.adsAccountIdPipe = new AdsAccountIdPipe();
        this.accounts = {
            id: 'adwords-accounts',
            title: 'Tài Khoản',
            type: 'group',
            children: [
                {
                    id: '2104087721',
                    title: '2104087721',
                    translate: 'NAV.APPLICATIONS',
                    icon: 'more_vert',
                    type: 'collapsable',
                    children: [
                        {
                            id: 'add-accounts',
                            title: 'Thêm tài khoản mới',
                            translate: 'NAV.SAMPLE.TITLE',
                            type: 'item',
                            icon: 'person_add',
                            url: '/them-tai-khoan-moi'
                        },
                        {
                            id: 'account-list',
                            title: 'Quản lý tài khoản Adwords',
                            type: 'item',
                            icon: 'dashboard',
                            url: '/account-list'
                        }
                    ]
                },
                {
                    id: 'account-list',
                    title: 'Quản Lý Tài Khoản AdWords',
                    type: 'item',
                    icon: 'dashboard',
                    url: '/danh-sach-tai-khoan'
                },
            ]
        };
        this._fuseNavigationService._onReloadNavigation$.subscribe(() => {
            this.loadNavigation();
        });
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.loadNavigation();
    }
    loadNavigation() {
        this._fuseSplashScreenService.show();
        this._adwordsAccountsService.getAdwordsAccount()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(res => {
            let accounts = res.data.accounts;
            let activeAdsAccountId = '';
            let activeAccountId = '';
            if (this._sessionService.activeAccountId) {
                activeAccountId = this._sessionService.activeAccountId.toString();
                activeAdsAccountId = this._sessionService.activeAdsAccountId.toString();
                this._sessionService.setAdwordId(activeAdsAccountId);
                this._sessionService.setAccountId(activeAccountId);
            }
            if (accounts.length > 0) {
                if (!activeAccountId) {
                    this._sessionService.setActiveAdsAccountId(this.adsAccountIdPipe.transform(accounts[0].adsId.toString()));
                    this._sessionService.setActiveAccountId(accounts[0].id.toString());
                    this._sessionService.setAdwordId(accounts[0].adsId.toString());
                    this._sessionService.setAccountId(accounts[0].id.toString());
                    activeAdsAccountId = this.adsAccountIdPipe.transform(accounts[0].adsId.toString());
                    activeAccountId = accounts[0].id.toString();
                }
                accounts = accounts.filter(account => {
                    return this.adsAccountIdPipe.transform(account.adsId) !== activeAdsAccountId;
                });
                accounts = accounts.map(account => {
                    return {
                        id: account.id,
                        title: this.adsAccountIdPipe.transform(account.adsId),
                        translate: 'NAV.SAMPLE.TITLE',
                        type: 'item',
                        icon: 'remove',
                        isAdsAccount: true
                    };
                });
                this.accounts.children[0] = {
                    id: activeAdsAccountId,
                    title: activeAdsAccountId,
                    translate: 'NAV.APPLICATIONS',
                    icon: 'more_vert',
                    type: 'collapsable',
                    children: [
                        {
                            id: 'add-accounts',
                            title: 'Thêm tài khoản mới',
                            translate: 'NAV.SAMPLE.TITLE',
                            type: 'item',
                            icon: 'person_add',
                            url: '/them-tai-khoan-moi'
                        },
                    ]
                };
                this.accounts.children[0].children = accounts.concat(this.accounts.children[0].children);
                this.accounts.children[2] = {
                    id: 'add-tracking-tags',
                    title: 'Gắn Tracking Chiến Dịch',
                    type: 'item',
                    icon: 'location_searching',
                    url: '/gan-tracking/chien-dich'
                };
            }
            else {
                this.accounts.children[0].title = 'Thêm tài khoản mới';
                this.accounts.children[0].id = null;
                this.accounts.children[0].url = '/them-tai-khoan-moi';
            }
            this.loadRecentNavigation();
            this._fuseSplashScreenService.hide();
        }, error => {
            this._sessionService.setActiveAdsAccountId('');
            this._sessionService.setActiveAccountId('');
            this._sessionService.setAdwordId('');
            this._sessionService.setAccountId('');
            this.accounts.children[0] = {
                id: 'add-accounts',
                title: 'Thêm tài khoản mới',
                type: 'item',
                icon: 'person_add',
                url: '/them-tai-khoan-moi'
            };
            this.loadRecentNavigation();
            this._fuseSplashScreenService.hide();
        });
    }
    loadRecentNavigation() {
        // Load the navigation either from the input or from the service
        this.navigation = this.navigation || this._fuseNavigationService.getCurrentNavigation();
        // Subscribe to the current navigation changes
        this._fuseNavigationService.onNavigationChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
            // Load the navigation
            this.navigation = this._fuseNavigationService.getCurrentNavigation();
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
        // Subscribe to navigation item
        merge(this._fuseNavigationService.onNavigationItemAdded, this._fuseNavigationService.onNavigationItemUpdated, this._fuseNavigationService.onNavigationItemRemoved).pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FuseNavigationComponent.prototype, "layout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FuseNavigationComponent.prototype, "navigation", void 0);
FuseNavigationComponent = tslib_1.__decorate([
    Component({
        selector: 'fuse-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.scss'],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [AdwordsAccountsService]
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef,
        FuseNavigationService,
        FuseSplashScreenService,
        AdwordsAccountsService,
        SessionService])
], FuseNavigationComponent);
export { FuseNavigationComponent };
//# sourceMappingURL=navigation.component.js.map