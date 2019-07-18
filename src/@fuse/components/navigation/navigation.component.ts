import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
    selector       : 'fuse-navigation',
    templateUrl    : './navigation.component.html',
    styleUrls      : ['./navigation.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuseNavigationComponent implements OnInit
{
    @Input()
    layout = 'vertical';

    @Input()
    navigation: any;

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
              id: '2104087721',
              title: '2104087721',
              translate: 'NAV.SAMPLE.TITLE',
              type: 'item',
              icon: 'remove',
              url: '/chan-ip/2104087721',
            },
            {
              id: '5406435113',
              title: '5406435113',
              translate: 'NAV.SAMPLE.TITLE',
              type: 'item',
              icon: 'remove',
              url: '/chan-ip/5406435113',
            },
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
              title: 'Quản ý tài khoản Adwords',
              type: 'item',
              icon: 'dashboard',
              url: '/account-list'
            }
          ]
        },
        {
          id: 'account-list',
          title: 'Quản ý tài khoản Adwords',
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
        private _fuseNavigationService: FuseNavigationService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Load the navigation either from the input or from the service
        this.navigation = this.navigation || this._fuseNavigationService.getCurrentNavigation();

        this.navigation.unshift(this.accounts);

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
