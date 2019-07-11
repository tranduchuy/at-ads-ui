import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment as environmentDev } from 'environments/environment';

const appDev: Routes = [
  {
    path: 'component-list',
    loadChildren: './shared/components/component-list/component-list.module#ComponentListModule',
  }
];

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './main/sample/sample.module#SampleModule'
  },
  {
    path: 'auth',
    loadChildren: './main/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

if (!environmentDev.production) {
  appRoutes.unshift(...appDev);
}

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
