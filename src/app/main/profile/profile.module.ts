import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AddAdwordsAccountsRoutingModule } from '../add-adwords-accounts/add-adwords-accounts-routing.module';
import { MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [UpdateUserInfoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatGridListModule,
    FuseSharedModule,
    InputTextModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
