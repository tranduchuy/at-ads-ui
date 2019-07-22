import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SelectCampaignsComponent } from './select-campaigns/select-campaigns.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'select-campaigns',
      pathMatch: 'full',
      component: SelectCampaignsComponent
    }
  ])],
  exports: [RouterModule]
})
export class AddTrackingTagsRoutingModule { }
