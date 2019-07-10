import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '../../../@fuse/components';
import { DialogModule } from '../../dialog/dialog.module';

import { SampleComponent } from './sample.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent
  }
];

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule,
    FuseConfirmDialogModule,
    DialogModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    SampleComponent
  ]
})

export class SampleModule {
}
