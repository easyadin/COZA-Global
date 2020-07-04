import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  constructor() {
    // this.aFireMessaging.messages.subscribe(
    //   (_message) => {
    //  _message.onMessage = _message.onMessage.bind(_message);
    //  _message.onTokenRefresh = _message.onTokenRefresh.bind(_message);
    // _message = this.aFireMessaging.onMessage.bind(_message)
    // _message = this.aFireMessaging.onTokenRefresh = this.aFireMessaging.onTokenRefresh.bind(_message);
    //    this.currentMessage.next(_message)
    //    console.log( this.currentMessage)
    //     console.log(_message)
    //   }
    // )
  }

  currentMessage = new BehaviorSubject(null);

  requestPermission() {
    // this.aFireMessaging.requestToken.subscribe(
    //   (token) => { console.log(token) },
    //   (error) => { console.log(error) }
    // )
    // this.aFireMessaging.requestPermission
    // .pipe(mergeMapTo(this.aFireMessaging.tokenChanges))
    // .subscribe(
    //   (token)=>{console.log('Permission Granted', token)},
    //    (error) =>{console.error}
    // )
  }

  receiveMessage() {
    //   this.aFireMessaging.messages.subscribe(
    //     (payload) => {
    //       console.log("Message Received - ", payload);
    //       this.currentMessage.next(payload);
    //     }
    //   )
    // 
  }
}
