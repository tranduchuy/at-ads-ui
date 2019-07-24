import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { AdwordsAccountsService } from '../../../app/shared/services/ads-accounts/adwords-accounts.service';
import { SessionService } from '../../../app/shared/services/session.service';
import { FuseSplashScreenService } from '../../services/splash-screen.service';

import { AdsAccountIdPipe } from '../../../app/shared/pipes/ads-account-id/ads-account-id.pipe';

@Component({
  selector: 'fuse-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdwordsAccountsService]
})
export class FuseNavigationComponent implements OnInit {
  @Input()
  layout = 'vertical';

  @Input()
  navigation: any;

  adsAccountIdPipe = new AdsAccountIdPipe();

  accounts =
    {
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
              icon: 'add_box',
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
          title: 'Quản lý tài khoản Adwords',
          type: 'item',
          icon: 'dashboard',
          url: '/account-list'
        }
      ]
    }
    ;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {FuseNavigationService} _fuseNavigationService
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _adwordsAccountsService: AdwordsAccountsService,
    private _sessionService: SessionService,
  ) {
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
  ngOnInit(): void {
    this.loadNavigation();
  }
  loadNavigation(): void {
    this._fuseSplashScreenService.show();
    this._adwordsAccountsService.getAdwordsAccount()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(res => {
        let accounts = res.data.accounts;
        let activeAdsAccountId = '';
        let activeAccountId = this._sessionService.activeAccountId;
        if (this._sessionService.activeAccountId) {
          activeAccountId = this._sessionService.activeAccountId.toString();
          activeAdsAccountId = this._sessionService.activeAdsAccountId.toString();
          this._sessionService.setAdwordId(activeAccountId);
        }
        if (accounts.length > 0) {
          if (!activeAccountId) {
            this._sessionService.setActiveAdsAccountId(accounts[0].adsId.toString());
            this._sessionService.setActiveAccountId(accounts[0].id.toString());
            this._sessionService.setAdwordId(accounts[0].id.toString());

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
                icon: 'add_box',
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
          };
          this.accounts.children[0].children = accounts.concat(this.accounts.children[0].children);
        } else {
          this.accounts.children[0].title = 'Thêm tài khoản mới';
          this.accounts.children[0].id = null;
          this.accounts.children[0].url = '/them-tai-khoan-moi';
        }
        this.loadRecentNavigation();
        this._fuseSplashScreenService.hide();
      },
        error => {
          this.accounts.children[0] = {
            id: 'add-accounts',
            title: 'Thêm tài khoản mới',
            type: 'item',
            icon: 'add_box',
            url: '/them-tai-khoan-moi'
          };
          this.loadRecentNavigation();
          this._fuseSplashScreenService.hide();
        });
  }

  loadRecentNavigation(): void {
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
    merge(
      this._fuseNavigationService.onNavigationItemAdded,
      this._fuseNavigationService.onNavigationItemUpdated,
      this._fuseNavigationService.onNavigationItemRemoved
    ).pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }
}
