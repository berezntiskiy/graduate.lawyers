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
    template: `
    <ul>
        <li *ngFor="let message of messages; let i = index">
            {{message.user.name}} - {{message.created_at}}: {{message.body}}
        </li>
    </ul>
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
