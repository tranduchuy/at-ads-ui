import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatButtonModule, MatGridListModule, MatIconModule, MatFormFieldModule } from '@angular/material';
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
    MatFormFieldModule,
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
