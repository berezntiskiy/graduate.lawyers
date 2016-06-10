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
import {ReversePipe} from "../shared/pipes/reverse.pipe";


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
    pipes: [
        ReversePipe
    ],
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
                <chat-messages [messages]="messages"></chat-messages>
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
export class Chat implements OnInit, OnDestroy {
    activeConversation:Conversation;
    conversations:Conversation[] = [];
    conversations$:any;
    messages:Message[] = [];
    messages$:any;
    joinedMap:Map<number, boolean>;
    socket:any; // io
    // relatedUsers:User[] = [];

    constructor(public appState:AppState,
                public conversationService:ConversationService,
                public messageService:MessageService) {
    }

    ngOnInit() {
        this.socket = io();
        this.joinedMap = new Map<number, boolean>();
        // socket.emit('leave:all');
        this.conversations$ = this.conversationService.getList().subscribe((data) => {
            this.conversations = data;
            this.joinInRooms();
        });

        this.socket.on('joined', (data)=> {
            console.log('JOINED ', data.message)
        });

        this.socket.on('chat.messages', (message:Message)=> {
            console.info(message);
            this.messages.push(message);
        });
    }

    joinInRooms() {
        this.conversations.forEach(this.joinInRoom, this);
    }

    joinInRoom(conversation:Conversation) {
        if (this.joinedMap.get(conversation.id) !== true) {
            this.joinedMap.set(conversation.id, true);

            this.socket.emit('join', {room: conversation.id});
        }
    }

    setActiveConversation({value: conversation}) {
        this.activeConversation = conversation;

        this.messages = [];
        this.messages$ = this.messageService.getList(this.activeConversation.id).subscribe((data)=> {
            this.messages = data;
        });
    }

    sendMessage({value}) {
        const message = new Message();
        message.conversation_id = this.activeConversation.id;
        message.body = value.body;
        this.messageService.send(message).subscribe(() => {
            console.log('success');
        });
    }

    ngOnDestroy() {
        this.socket.disconnect();
    }
}
