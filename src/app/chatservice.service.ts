// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {
//   constructor(private socket: Socket) {}

//   sendMessage(msg: string) {
//     this.socket.emit('my message', msg);
//   }
//   getMessage() {
//     return this.socket.fromEvent('my message').pipe(map((data:any) => {
//       return data;

//     }));
//   }
// }