import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppState} from '../app.service';
import {ChatConversations} from "./chat-conversations.component";
import {Conversation} from "./conversation";
import {ConversationService} from "./conversation.service";



@Component({
    selector: 'chat',
    providers: [
        ConversationService
    ],
    viewProviders: [],
    directives: [
        ChatConversations
    ],
    pipes: [],
    template: `
    <h1>Chat</h1>
    <chat-conversations [conversations]="conversationObservable | async" (open)="setActiveConversation($event)" [activeConversation]="activeConversation"></chat-conversations>
`
})
export class Chat implements OnInit {
    activeConversation:Conversation;
    conversationObservable:any;

    constructor(public appState:AppState,
                public conversationService:ConversationService
    ) {
    }

    ngOnInit() {
        this.conversationObservable = this.conversationService.getList();
    }

    setActiveConversation({value: conversation}) {
        this.activeConversation = conversation;
    }
}
