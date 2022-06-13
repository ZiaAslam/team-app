import { Component } from '@angular/core';
import { TeamsService } from '../Services/teams.service';

// import  io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  message: string = '';
  messages: string[] = [];
  constructor( private chatService: TeamsService) {}
  ngOnInit(): void {
    this.getMessage();
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  getMessage() {
    this.chatService.getMessage().subscribe((data) => {
      this.messages.push(data);
    });
  }
}
