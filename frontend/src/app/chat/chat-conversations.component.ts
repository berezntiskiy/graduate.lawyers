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
    .item:hover {
        background: #eee;
    }
`],
    template: `
    <div>
        <div class="item" (click)="emitChoose(conversation)" *ngFor="let conversation of conversations; let i = index">
            <div>
                {{conversation.name}}{{activeConversation == conversation ? ' (active)' : ''}}
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
