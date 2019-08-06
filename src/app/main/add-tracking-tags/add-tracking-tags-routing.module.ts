import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SelectCampaignsComponent } from './select-campaigns/select-campaigns.component';
import { TrackingWebsiteComponent } from './tracking-website/tracking-website.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'chien-dich',
      pathMatch: 'full',
      component: SelectCampaignsComponent
    },
    {
      path: 'website/:adsId/:key',
      pathMatch: 'full',
      component: TrackingWebsiteComponent
    },
  ])],
  exports: [RouterModule]
})
export class AddTrackingTagsRoutingModule { }
