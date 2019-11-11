import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
  private url = 'https://click-chat.herokuapp.com';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new_message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new_message', (message) => {
        observer.next(message);
      });
    });
  }
}