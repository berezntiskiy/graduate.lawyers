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
import {CardContainer} from "../shared/card-container";
import {ChatNewRoom} from "./chat-newroom.component";


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
        ChatSend,
        CardContainer,
        ChatNewRoom
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
        flex-flow: row wrap;
    }
    
    sidebar, content {
        flex: 1 100%;
    }
    
    sidebar {
        flex: 1 auto;
    }
    
    content {
        flex: 10 auto;
    }
    
    .stick {
      position: sticky;
      position: -webkit-sticky;
      bottom: 30px;
    }
    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
`
    ],
    template: `
    <button md-mini-fab style="float:right; margin-right: 10px; margin-top: 5px; z-index: 10;" (click)="showCreateNew = !showCreateNew">
        {{showCreateNew ? '-' : '+'}}
    </button>
    <chat-newroom *ngIf="showCreateNew" (create)="createNewRoom($event)"></chat-newroom>
    <card-container>
        <div class="chat clearfix">
            <sidebar>
                <md-card>
                  <md-card-content>
                    <h1>Conversations</h1>
                    <chat-conversations [conversations]="conversations" (open)="setActiveConversation($event)" [activeConversation]="activeConversation"></chat-conversations>
                  </md-card-content>
                </md-card>
            </sidebar>
            <content>
                <div *ngIf="!activeConversation">
                    <h1 style="color: #aec5c5">Choose conversation from sidebar</h1>
                </div>
                <md-card *ngIf="activeConversation">
                  <md-card-content>
                    <h1>Messages</h1>
                    <chat-messages [messages]="messages"></chat-messages>
                    <chat-send style="width: 100%" (send)="sendMessage($event)"></chat-send>
                  </md-card-content>
                </md-card>
            </content>
        </div>
    </card-container>
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
    showCreateNew:boolean = false; // io

    constructor(public appState:AppState,
                public conversationService:ConversationService,
                public messageService:MessageService) {
    }

    ngOnInit() {
        this.socket = io(window.location.origin + '/chat');
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
            this.messages = [...this.messages, message];
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

    createNewRoom(event) {
        this.conversationService.create(event.value).subscribe((data) => {
            this.conversations.push(data);
            this.joinInRooms();
        });
    }

    ngOnDestroy() {
        this.socket.disconnect();
    }
}
