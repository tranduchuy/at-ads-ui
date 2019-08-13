import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuardService } from './shared/services/guard/main-guard.service';
import { AccountAcceptanceGuardService } from './shared/services/guard/account-acceptance-guard.service';

const appRoutes: Routes = [
  {
    path: 'chan-ip',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/ban-ips/ban-ips.module#BanIPsModule'
  },
  {
    path: '',
    canActivate: [MainGuardService],
    loadChildren: './main/add-adwords-accounts/add-adwords-accounts.module#AddAdwordsAccountsModule'
  },
  {
    path: 'them-tai-khoan-moi',
    canActivate: [MainGuardService],
    loadChildren: './main/add-adwords-accounts/add-adwords-accounts.module#AddAdwordsAccountsModule'
  },
  {
    path: 'danh-sach-tai-khoan',
    canActivate: [MainGuardService],
    loadChildren: './main/adwords-account-list/adwords-account-list.module#AdwordsAccountListModule'
  },
  {
    path: 'gan-tracking',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/add-tracking-tags/add-tracking-tags.module#AddTrackingTagsModule'
  },
  {
    path: 'quan-ly-website/:accountId/:adsId',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/website-management/website-management.module#WebsiteManagementModule'
  },
  {
    path: 'quan-ly-website',
    canActivate: [MainGuardService],
    loadChildren: './main/website-management/website-management.module#WebsiteManagementModule'
  },
  {
    path: 'thong-tin-ca-nhan',
    canActivate: [MainGuardService],
    loadChildren: './main/profile/profile.module#ProfileModule'
  },
  {
    path: 'bao-cao',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/reports/reports.module#ReportsModule'
  },
  {
    path: '**',
    redirectTo: '/danh-sach-tai-khoan'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
