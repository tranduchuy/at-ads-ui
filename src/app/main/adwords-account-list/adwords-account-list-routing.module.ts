import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdwordsAccountListComponent } from './adwords-account-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: AdwordsAccountListComponent
    }
  ])],
  exports: [RouterModule]
})
export class AdwordsAccountListRoutingModule { }
