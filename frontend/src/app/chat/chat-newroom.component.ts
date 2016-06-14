import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
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
import {StaffService} from "../shared/services/staff.service";


@Component({
    selector: 'chat-newroom',
    providers: [
        StaffService
    ],
    viewProviders: [],
    directives: [
    ],
    pipes: [
    ],
    styles: [
        `
        select {
            border: 1px solid #ddd;
            border-radius: 3px;
            background: #fff;
            }
`
    ],
    template: `
    <md-card>
        <md-card-content>
            <form (submit)="submit()">
                <div>
                    <label>
                        Chose staff <br>
                        <select [(ngModel)]="staffId">
                            <option value="">Random</option>
                            <option [value]="person.id" *ngFor="let person of staff">{{person.name}}</option>
                        </select>
                    </label>
                </div><br>
                <div>
                    <md-input required [(ngModel)]="name" placeholder="Conversation name"></md-input>
                </div><br>
                <button md-raised-button>Create room</button>
            </form>
        </md-card-content>
    </md-card>
`
})
export class ChatNewRoom implements OnInit {
    name:string;
    staffId:any = '';
    staff: any;
    @Output() create = new EventEmitter();

    constructor(private staffService: StaffService){}

    ngOnInit() {
        this.staffService.getList().subscribe(data=>this.staff = data);
    }

    submit() {
        this.create.emit({value: {name: this.name, staffId: this.staffId}})
    }
}
