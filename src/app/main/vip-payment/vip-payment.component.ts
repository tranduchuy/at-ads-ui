import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-payment',
  templateUrl: './vip-payment.component.html',
  styleUrls: ['./vip-payment.component.scss']
})
export class VipPaymentComponent implements OnInit {

  packagesCols: string[] = ['name', 'price', 'recommendance'];

  packages = [
    {
      name: '1 tháng (~30 ngày)',
      price: '500.000 VNĐ',
      recommendance: '',
      discount: ''
    },
    {
      name: '3 tháng (~90 ngày)',
      price: '1.350.000 VNĐ',
      recommendance: 'Khuyên dùng',
      discount: 'Giảm 10%'
    },
    {
      name: '6 tháng (~180 ngày)',
      price: '2.400.000 VNĐ',
      recommendance: 'Yêu thích',
      discount: 'Giảm 20%'
    },
    {
      name: '12 tháng (~30 ngày)',
      price: '3.000.000 VNĐ',
      recommendance: 'HOT',
      discount: 'Giảm 40%'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
