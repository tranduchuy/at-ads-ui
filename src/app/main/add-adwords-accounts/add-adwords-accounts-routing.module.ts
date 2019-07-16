import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAdwordsAccountsComponent } from './add-adwords-accounts.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: AddAdwordsAccountsComponent
    }
  ])],
  exports: [RouterModule]
})
export class AddAdwordsAccountsRoutingModule {

}
