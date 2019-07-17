import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanOptionalIPService {

  constructor() { }

  banOptionalIP(){
    alert('Chặn IP thành công!');
  }
}
