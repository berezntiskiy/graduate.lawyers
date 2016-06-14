import {Component, OnInit, Input, Output} from '@angular/core';
import {AppState} from '../app.service';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {Conversation} from "./conversation";
import {Message} from "./message";
import {User} from "../user/user";


@Component({
    selector: 'chat-messages',
    providers: [],
    viewProviders: [],
    directives: [],
    pipes: [],
    styles:[`
    .item {
        padding: 15px 5px;
        box-sizing: border-box;
    }
    .item:nth-child(2n) {
        background: #eee;
    }
    .date {
        float: right;
        color: #999;
    }
`],
    template: `
    <div>
        <div class="item" *ngFor="let message of messages; let i = index">
            <div class="date">{{message.created_at}}</div>
            {{message.user.name}}: {{message.body}}
        </div>
    </div>
`
})
export class ChatMessages implements OnInit {
    @Input() private messages:Message[] = [];
    @Input() private users:User[] = [];
    @Output() send: EventEmitter<any> = new EventEmitter();

    constructor(public appState:AppState) {
    }

    ngOnInit() {
    }

    emitChoose(message: Message) {
        this.send.emit({value: message})
    }
}
