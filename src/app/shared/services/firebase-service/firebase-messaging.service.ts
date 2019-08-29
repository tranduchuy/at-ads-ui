import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';
import { HomepageService } from 'app/homepage/homepage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class FirebaseMessagingService {

  messaging = firebase.messaging();
  currentMessage$ = new BehaviorSubject<any>({});

  constructor(
    private _homepageService: HomepageService
  ) {}

  getPermission() {
    

    this.messaging.requestPermission()
      .then(() => {
        console.log('Firebase permission granted.');
        return this.messaging.getToken();
      })
      .then(currentToken => {
        if (currentToken) {
          console.log('new token', currentToken);
          const sub = this._homepageService.saveFirebaseToken(currentToken)
            .subscribe(
              res => {
                this.recieveMessage();
              },
              (error: HttpErrorResponse) => {
                
              });
          sub.unsubscribe();
        }
      })
      .catch((err) => {
        console.error('Firebase permission denied.');
      });
  }

  getRefreshedToken() {
    this.messaging.onTokenRefresh(() => {
      this.messaging.getToken()
        .then((refreshedToken) => {
          console.log('refresed token', refreshedToken);
        })
        .catch((err) => {
          console.log('Unable to retrieve refreshed token', err);
        });
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
