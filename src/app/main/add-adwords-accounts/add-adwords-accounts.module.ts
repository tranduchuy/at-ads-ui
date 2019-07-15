import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdwordsAccountsComponent } from './add-adwords-accounts.component';
import { AddAdwordsAccountsRoutingModule } from './add-adwords-accounts-routing.module';

@NgModule({
  declarations: [AddAdwordsAccountsComponent],
  imports: [
    CommonModule,
    AddAdwordsAccountsRoutingModule
  ]
})
export class AddAdwordsAccountsModule { }
