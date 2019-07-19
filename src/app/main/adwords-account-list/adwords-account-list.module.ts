import { NgModule } from '@angular/core';
import { AdwordsAccountListRoutingModule } from './adwords-account-list-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { InputTextareaModule } from '../../shared/components/input-textarea/input-textarea.module';
import { SelectTextModule } from '../../shared/components/select-text/select-text.module';
import { CheckboxGroupModule } from '../../shared/components/checkbox-group/checkbox-group.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdwordsAccountListService } from './adwords-account-list.service';

import { AdwordsAccountListComponent } from './adwords-account-list.component';

@NgModule({
  declarations: [AdwordsAccountListComponent],
  imports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,

    CheckboxGroupModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    SelectTextModule,

    FuseSharedModule,

    AdwordsAccountListRoutingModule
  ],
  providers: [AdwordsAccountListService]
})
export class AdwordsAccountListModule { }
