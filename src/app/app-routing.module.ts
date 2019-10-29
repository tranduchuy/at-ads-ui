import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuardService } from './shared/services/guard/main-guard.service';
import { AccountAcceptanceGuardService } from './shared/services/guard/account-acceptance-guard.service';
import { environment } from 'environments/environment';
import { AddAwordsAccountsGuardService } from './shared/services/guard/add-awords-accounts-guard.service';

const appRoutes: Routes = [
  {
    path: 'chan-ip',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/ban-ips/ban-ips.module#BanIPsModule'
  },
  {
    path: '',
    canActivate: [MainGuardService],
    loadChildren: './main/adwords-account-list/adwords-account-list.module#AdwordsAccountListModule'
  },
  {
    path: 'them-tai-khoan-moi',
    canActivate: [MainGuardService, AddAwordsAccountsGuardService],
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
    path: 'quan-ly-website/:accountId',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/website-management/website-management.module#WebsiteManagementModule'
  },
  {
    path: 'quan-ly-website',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/website-management/website-management.module#WebsiteManagementModule'
  },
  {
    path: 'nguoi-dung',
    canActivate: [MainGuardService],
    loadChildren: './main/profile/profile.module#ProfileModule'
  },
  {
    path: 'bao-cao',
    canActivate: [MainGuardService, AccountAcceptanceGuardService],
    loadChildren: './main/reports/reports.module#ReportsModule'
  },
  {
    path: 'yeu-cau-boi-hoan-phi',
    canActivate: [MainGuardService],
    loadChildren: './main/request-cash-back/request-cash-back.module#RequestCashBackModule'
  },
  {
    path: 'nang-cap-vip',
    canActivate: [MainGuardService],
    loadChildren: './main/vip-payment/vip-payment.module#VipPaymentModule'
  },
  {
    path: '**',
    redirectTo: '/danh-sach-tai-khoan'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: environment.production, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
