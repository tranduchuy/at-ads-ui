import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendInfoComponent } from './send-info/send-info.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'gui-thong-tin-tu-van',
        pathMatch: 'full',
        component: SendInfoComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class VisitorToolsRoutingModule { }
