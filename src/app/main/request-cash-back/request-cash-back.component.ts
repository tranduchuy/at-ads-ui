import { Component, OnInit } from '@angular/core';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-request-cash-back',
  templateUrl: './request-cash-back.component.html',
  styleUrls: ['./request-cash-back.component.scss']
})
export class RequestCashBackComponent extends PageBaseComponent implements OnInit {

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    private _sessionService: SessionService
  ) {
    super();
   }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if(accountId)
          this._fuseProgressBarService.hide();
        else this._fuseProgressBarService.show();
      });
    this.subscriptions.push(sub);
  }

  showImageDialog(imgSrc: string) {
  }

}
