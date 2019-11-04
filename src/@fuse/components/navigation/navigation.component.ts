import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { AdwordsAccountsService } from '../../../app/shared/services/ads-accounts/adwords-accounts.service';
import { SessionService } from '../../../app/shared/services/session.service';
import { FuseSplashScreenService } from '../../services/splash-screen.service';

import { AdsAccountIdPipe } from '../../../app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { accessSync } from 'fs';
import { FuseProgressBarService } from '../progress-bar/progress-bar.service';

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
      children: []
    };

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
    private _fuseProgressBarService: FuseProgressBarService,
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
    this.accounts.children = [];
    this.getUser();

    this.accounts.children.push({
      id: 'account-list',
      title: 'Quản Lý Tài Khoản',
      type: 'item',
      icon: 'dashboard',
      url: '/danh-sach-tai-khoan'
    });

    if (this._sessionService.activeAccountId) {
      this.accounts.children.push({
        id: 'add-tracking-tags',
        title: 'Gắn Tracking Chiến Dịch',
        type: 'item',
        icon: 'location_searching',
        url: '/gan-tracking/chien-dich'
      });
    }

    this.loadRecentNavigation();
  }

  getUser() {
    const sub = this._sessionService.getUser()
      .subscribe(user => {
        if (user && user.licence) {
          const userLicenceType = user.licence.type;

          if (userLicenceType !== 'FREE' && userLicenceType !== 'VIP1') {
            this.accounts.children.push({
              id: 'add-accounts',
              title: 'Thêm Tài Khoản Mới',
              type: 'item',
              icon: 'library_add',
              url: '/them-tai-khoan-moi'
            });
          }
          else {
            this.checkIfUserHasAccount();
          }
        }
      });
    sub.unsubscribe();
  }

  checkIfUserHasAccount() {
    const sub = this._sessionService.checkIfUserHasAccount()
      .pipe(distinctUntilChanged())
      .subscribe((userHasAccount: boolean) => {
        if (userHasAccount) {
          this.accounts.children.shift();
        }
        else {
          this.accounts.children.unshift({
            id: 'add-accounts',
            title: 'Thêm Tài Khoản Mới',
            type: 'item',
            icon: 'library_add',
            url: '/them-tai-khoan-moi'
          });
        }
      });
    sub.unsubscribe();
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
