import { NgModule } from '@angular/core';
import { AdsAccountIdPipe } from './ads-account-id.pipe';

@NgModule({
  declarations: [AdsAccountIdPipe],
  exports: [AdsAccountIdPipe]
})
export class AdsAccountIdModule { }
