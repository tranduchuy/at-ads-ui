import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._sessionService.remove();
    this._router.navigate(['/gioi-thieu']);
  }
}
