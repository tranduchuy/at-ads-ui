import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuardService } from './shared/services/guard/main-guard.service';

const appRoutes: Routes = [
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
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
