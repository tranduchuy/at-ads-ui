import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdwordsAccountsComponent } from './add-adwords-accounts.component';
import { AddAdwordsAccountsRoutingModule } from './add-adwords-accounts-routing.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { InputNumberModule } from '../../shared/components/input-number/input-number.module';

import { MatButtonModule, MatIconModule, MatDividerModule } from '@angular/material';
import { AddAdwordsAccountsService } from './add-adwords-accounts.service';
@NgModule({
  declarations: [AddAdwordsAccountsComponent],
  imports: [
    CommonModule,
    AddAdwordsAccountsRoutingModule,
    MatGridListModule,
    FuseSharedModule,
    InputTextModule,
    MatButtonModule,
    MatIconModule,
    InputNumberModule,
    MatDividerModule
  ],
  providers: [
    AddAdwordsAccountsService
  ]
})
export class AddAdwordsAccountsModule { }
