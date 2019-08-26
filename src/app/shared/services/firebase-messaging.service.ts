import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessagingService {

  messaging = firebase.messaging();
  currentMessage$ = new BehaviorSubject<any>({});

  tokens = [
    'dbb7O8KSKxo:APA91bH5F7JhfC5sYWDNTEJKn-O6Ik1IJNNfgQF8O8EZLEftZcQhBNVE29Qvfw2f98mpJeZ9F5k7tJcXyRw6ncb_1VPucdPvhh9A1elOSmzwZ6CRDOXIqLEQVgSlC_ldHkExkxbv9v6f',
    'c6cyfBEx-BA:APA91bGtGDVVSDeRTzN-rELkjdqxuVj4XHDdZhCz3TuUNqKNEuh-X2s45z-3T5r9hTOnd1W_psbp84A697lXcxlYt4PNfKPSgLsfqR7ly8E74Dke-cRgE0iweP7YH68JCuTkTmfld71i'
  ];
  
  getPermission() {
    this.messaging.requestPermission()
      .then(() => {
        console.log('Have permisson');
        return this.messaging.getToken();
      })
      .then((currentToken) => {
        if(currentToken) {

        }
      })
      .catch((err) => {
        console.log('Error occured');
      });
  }

  getMessage(): Observable<any> {
    return this.currentMessage$.asObservable();
  }

  recieveMessage() {
    this.messaging.onMessage((payload: any) => {
      //console.log('Message recieved', payload);
      this.currentMessage$.next(payload);
    });
  }
}
