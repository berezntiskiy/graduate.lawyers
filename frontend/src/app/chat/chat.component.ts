import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppState} from '../app.service';
import {ChatConversations} from "./chat-conversations.component";
import {Conversation} from "./conversation";
import {ConversationService} from "./conversation.service";
import {MessageService} from "./message.service";
import {ChatMessages} from "./chat-messages.component";
import {User} from "../user/user";
import {ChatSend} from "./chat-send.component";
import {Message} from "./message";

// import * as io from 'socket.io-client';
// import io = require('socket.io-client/lib/index.js');

import * as io from "socket.io-client";


@Component({
    selector: 'chat',
    providers: [
        ConversationService,
        MessageService
    ],
    viewProviders: [],
    directives: [
        ChatConversations,
        ChatMessages,
        ChatSend
    ],
    pipes: [],
    styles: [
        `
    md-card {
        margin: 15px;
    }
    .chat {
        display: flex;
    }
`
    ],
    template: `
    <h1>Chat</h1>
    <div class="chat">
        <sidebar>
            <md-card>
              <md-card-content>
                <h1>Conversations</h1>
                <chat-conversations [conversations]="conversations" (open)="setActiveConversation($event)" [activeConversation]="activeConversation"></chat-conversations>
              </md-card-content>
            </md-card>
        </sidebar>
        <content style="width:100%" *ngIf="activeConversation">
            <md-card>
              <md-card-content>
                <h1>Messages</h1>
                <chat-messages [messages]="messages$ | async"></chat-messages>
              </md-card-content>
            </md-card>
        </content>
        
        <md-card style="width:100%" *ngIf="activeConversation">
          <md-card-content>
            <chat-send (send)="sendMessage($event)"></chat-send>
          </md-card-content>
        </md-card>
        
    </div>
`
})
export class Chat implements OnInit {
    activeConversation:Conversation;
    conversations:Conversation[];
    conversations$:any;
    messages$:any;
    // relatedUsers:User[] = [];

    constructor(public appState:AppState,
                public conversationService:ConversationService,
                public messageService:MessageService) {
    }

    ngOnInit() {
        this.conversations$ = this.conversationService.getList().subscribe((data) => {
            this.conversations = data;
            // data.forEach((data:Conversation) => {
            //     data.users.forEach(newUser => {
            //         let canAdd = true;
            //         this.relatedUsers.forEach((user) => {
            //             if (user.id == newUser.id)
            //                 canAdd = false;
            //         });
            //         if (canAdd)
            //             this.relatedUsers[newUser.id] = (newUser);
            //     });
            // });
        });
    }

    setActiveConversation({value: conversation}) {
        this.activeConversation = conversation;


        var
            socket = io('/ws/');

        socket.emit('join', { room: this.activeConversation.name });

        this.messages$ = this.messageService.getList(this.activeConversation.id);
    }

    sendMessage({value}) {
        const message = new Message();
        message.conversation_id = this.activeConversation.id;
        message.body = value.body;
        this.messageService.send(message).subscribe(() => {
            console.log('success');
        });
    }
}
