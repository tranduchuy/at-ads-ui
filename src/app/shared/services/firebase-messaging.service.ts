import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessagingService {

  messaging = firebase.messaging();
  currentMessage$ = new BehaviorSubject<any>({});

  constructor() {}

  getPermission() {
    this.messaging.requestPermission()
      .then(() => {
        console.log('Firebase has permisson :)');
        return this.messaging.getToken();
      })
      .then((currentToken) => {
        console.log(currentToken);
      })
      .catch((err) => {
        console.error('Firebase get permisson error :(');
      });
  }

  getMessage(): Observable<any> {
    return this.currentMessage$.asObservable();
  }

  recieveMessage() {
    this.messaging.onMessage((payload: any) => {
      console.log('Message recieved', payload);
      this.currentMessage$.next(payload);
    });
  }
}
