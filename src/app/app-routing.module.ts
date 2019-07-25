import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuardService } from './shared/services/guard/main-guard.service';

const appRoutes: Routes = [
  {
    path: 'chan-ip',
    canActivate: [MainGuardService],
    loadChildren: './main/ban-ips/ban-ips.module#BanIPsModule'
  },
  {
    path: '',
    canActivate: [MainGuardService],
    loadChildren: './main/sample/sample.module#SampleModule'
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
    path: 'add-tracking-tags',
    canActivate: [MainGuardService],
    loadChildren: './main/add-tracking-tags/add-tracking-tags.module#AddTrackingTagsModule'
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
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
