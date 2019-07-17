import { Component, OnInit } from '@angular/core';

export interface NumberClick{
  number: string
}

const data: NumberClick[] = [
  {
    number: '1 lần'
  },
  {
    number: '2 lần (được đề nghị)'
  },
  {
    number: '3 lần'
  },
]

@Component({
  selector: 'app-auto-ban-ip',
  templateUrl: './auto-ban-ip.component.html',
  styleUrls: ['./auto-ban-ip.component.scss']
})
export class AutoBanIPComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
