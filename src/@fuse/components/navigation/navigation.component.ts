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
      title: 'TÀI KHOẢN GOOGLE ADS',
      type: 'group',
      children: [
        {
          id: '',
          title: '',
          translate: 'NAV.APPLICATIONS',
          icon: '',
          type: 'collapsable',
          children: []
        },
        {
          id: '',
          title: '',
          type: '',
          icon: '',
          url: ''
        },
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

  isFreeAccounts: boolean[] = [];

  /**
   * On init
   */
  ngOnInit(): void {
    this.loadNavigation();
  }
  loadNavigation(): void {
    //this._fuseSplashScreenService.show();
    this._adwordsAccountsService.getAdwordsAccount()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (res) => {
          //let accounts = res.data.accounts.filter(item => item.isConnected === true);
          let accounts = res.data.accounts;
          let activeAdsAccountId = '';
          let activeAccountId = '';

          for (const item of accounts)
            this.isFreeAccounts[this.adsAccountIdPipe.transform(item.adsId)] = item.isFree;

          if (this._sessionService.activeAccountId) {
            activeAccountId = this._sessionService.activeAccountId;
            activeAdsAccountId = this._sessionService.activeAdsAccountId;
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
              icon: '../../../../../assets/icons/gg-ads.png',
              type: 'collapsable',
              children: [
                {
                  id: 'add-accounts',
                  title: 'Thêm tài khoản mới',
                  translate: 'NAV.SAMPLE.TITLE',
                  type: 'item',
                  icon: 'library_add',
                  url: '/them-tai-khoan-moi'
                },
              ]
            };

            if (this.isFreeAccounts[this.accounts.children[0].title] === false) {
              //this.accounts.children[0].icon = '../../../../../assets/icons/golden-shield.png';
              this.accounts.children[0].icon = '../../../../../assets/icons/gg-ads-vip.png';
            }

            this.accounts.children[0].children = accounts.concat(this.accounts.children[0].children);

            this.accounts.children[2] = {
              id: 'add-tracking-tags',
              title: 'Gắn Tracking Chiến Dịch',
              type: 'item',
              icon: 'location_searching',
              url: '/gan-tracking/chien-dich'
            }
          }
          else {
            this.accounts.children[0] = {
              id: 'add-accounts',
              title: 'Thêm tài khoản mới',
              type: 'item',
              icon: 'library_add',
              url: '/them-tai-khoan-moi'
            };
          }

          this.accounts.children[1] = {
            id: 'account-list',
            title: 'Quản Lý Tài Khoản',
            type: 'item',
            icon: 'dashboard',
            url: '/danh-sach-tai-khoan'
          },

            this.loadRecentNavigation();
          //this._fuseSplashScreenService.hide();
        },
        error => {

          //reset cookie
          this._sessionService.setActiveAdsAccountId('');
          this._sessionService.setActiveAccountId('');

          //emit changed value to all observer
          this._sessionService.setAdwordId('');
          this._sessionService.setAccountId('');

          //reset navbar displaying
          this.accounts.children = [];
          this.accounts.children[0] = {
            id: 'add-accounts',
            title: 'Thêm tài khoản mới',
            type: 'item',
            icon: 'library_add',
            url: '/them-tai-khoan-moi'
          };
          this.accounts.children[1] = {
            id: 'account-list',
            title: 'Quản Lý Tài Khoản',
            type: 'item',
            icon: 'dashboard',
            url: '/danh-sach-tai-khoan'
          };

          this.loadRecentNavigation();
          //this._fuseSplashScreenService.hide();
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
