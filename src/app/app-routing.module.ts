import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: './main/sample/sample.module#SampleModule'},
  {
    path: '',
    loadChildren: './main/sample/sample.module#SampleModule'
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
