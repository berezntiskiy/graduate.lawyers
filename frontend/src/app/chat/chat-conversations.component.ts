import {Component, OnInit, Input, Output} from '@angular/core';
import {AppState} from '../app.service';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {Conversation} from "./conversation";


@Component({
    selector: 'chat-conversations',
    providers: [],
    viewProviders: [],
    directives: [],
    pipes: [],
    styles: [`
    .item {
        padding: 15px 5px;
        box-sizing: border-box;
    }
    .item:nth-child(2n) {
        background: #f6f6f6;
    }
    .item.active {
        border-left: 5px solid tomato;
    }
`],
    template: `
    <div>
        <div class="item" [ngClass]="{active: activeConversation == conversation}" (click)="emitChoose(conversation)" *ngFor="let conversation of conversations; let i = index">
            <div>
                {{conversation.name}} <span style="color: tomato" *ngIf="conversation.new_messages">NEW {{conversation.new_messages}}</span>
            </div>
            <div>
                <small>
                    <span *ngFor="let user of conversation.users; let i = index">
                        {{user.name}}
                    </span>
                </small>
            </div>
            <div>
                <small>
                    Created at {{conversation.created_at}}
                </small>
            </div>
        </div>
    </div>
`
})
export class ChatConversations implements OnInit {
    @Input() private conversations = null;
    @Input() private activeConversation = null;
    @Output() open: EventEmitter<any> = new EventEmitter();

    constructor(public appState:AppState) {
    }

    ngOnInit() {
    }

    emitChoose(conversation: Conversation) {
        this.open.emit({value: conversation})
    }
}
