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
    template: `
    <h1>Chat</h1>
    <chat-conversations [conversations]="conversations" (open)="setActiveConversation($event)" [activeConversation]="activeConversation"></chat-conversations>
    <chat-messages [messages]="messages$ | async"></chat-messages>
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
