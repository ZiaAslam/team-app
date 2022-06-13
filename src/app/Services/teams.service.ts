import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import io from 'socket.io-client';
// import { Observable, Subject, fromEvent, pipe } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient, private socket: Socket) {}

  mainData() {
    return this.http.get('http://localhost:3001/tekteams/user/all');
  }

// send msg 
  sendMessage(msg: string) {
    this.socket.emit('my message', msg);
  }
  // get msg
  getMessage() {
    return this.socket.fromEvent('my message').pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  
 
}
