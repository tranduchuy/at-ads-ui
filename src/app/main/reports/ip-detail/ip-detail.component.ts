import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-ip-detail',
  templateUrl: './ip-detail.component.html',
  styleUrls: ['./ip-detail.component.scss']
})
export class IpDetailComponent extends PageBaseComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {

    const sub = this._activatedRoute.params
      .subscribe((params: any) => {
        
      });
    this.subscriptions.push(sub);

  }

}
