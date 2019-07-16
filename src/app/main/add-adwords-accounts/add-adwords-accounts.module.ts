import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdwordsAccountsComponent } from './add-adwords-accounts.component';
import { AddAdwordsAccountsRoutingModule } from './add-adwords-accounts-routing.module';

import { FuseSharedModule } from '@fuse/shared.module';

import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [AddAdwordsAccountsComponent],
  imports: [
    CommonModule,
    AddAdwordsAccountsRoutingModule,
    MatGridListModule,
    FuseSharedModule
  ]
})
export class AddAdwordsAccountsModule { }
