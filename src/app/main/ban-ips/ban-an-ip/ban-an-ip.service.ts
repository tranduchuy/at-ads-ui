import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanAnIPService {

  constructor() { }

  banAnIP(ip: string){
    alert(`Chặn IP ${ip} thành công!`);
  }
}
