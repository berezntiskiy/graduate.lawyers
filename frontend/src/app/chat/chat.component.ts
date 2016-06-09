import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppState} from '../app.service';
import {ChatConversations} from "./chat-conversations.component";
import {Conversation} from "./conversation";
import {ConversationService} from "./conversation.service";
import {MessageService} from "./message.service";
import {ChatMessages} from "./chat-messages.component";
import {User} from "../user/user";


@Component({
    selector: 'chat',
    providers: [
        ConversationService,
        MessageService
    ],
    viewProviders: [],
    directives: [
        ChatConversations,
        ChatMessages
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
        <content *ngIf="activeConversation">
            <md-card>
              <md-card-content>
                <h1>Messages</h1>
                <chat-messages [messages]="messages$ | async"></chat-messages>
              </md-card-content>
            </md-card>
        </content>
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
        this.messages$ = this.messageService.getList(this.activeConversation.id);
    }
}
