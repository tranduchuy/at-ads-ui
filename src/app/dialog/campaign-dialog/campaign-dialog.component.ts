import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-campaign-dialog',
  templateUrl: './campaign-dialog.component.html',
  styleUrls: ['./campaign-dialog.component.scss']
})
export class CampaignDialogComponent implements OnInit {

  campaigns: any;

  constructor(
    public dialogRef: MatDialogRef<CampaignDialogComponent>,
  ) { }

  ngOnInit() {
  }

}
