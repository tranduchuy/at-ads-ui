import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebsiteManagementComponent } from './website-management.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: WebsiteManagementComponent
    }
  ])],
  exports: [RouterModule]
})
export class WebsiteManagementRoutingModule { }
