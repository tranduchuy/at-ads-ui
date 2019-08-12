import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SelectCampaignsComponent } from './select-campaigns/select-campaigns.component';
import { TrackingWebsiteComponent } from './tracking-website/tracking-website.component';
import { AccountAcceptanceGuardService } from 'app/shared/services/guard/account-acceptance-guard.service';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'chien-dich',
      pathMatch: 'full',
      component: SelectCampaignsComponent
    },
    {
      path: 'website/:accountId/:adsId/:key',
      pathMatch: 'full',
      component: TrackingWebsiteComponent,
      canActivate: [AccountAcceptanceGuardService]
    },
  ])],
  exports: [RouterModule]
})
export class AddTrackingTagsRoutingModule { }
