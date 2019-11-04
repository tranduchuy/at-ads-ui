import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpgradeLicenceComponent } from './upgrade-licence.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: UpgradeLicenceComponent
    }
  ])],
  exports: [RouterModule]
})
export class UpgradeLicenceRoutingModule { }

