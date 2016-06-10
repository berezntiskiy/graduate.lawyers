import {Component, OnInit, Input, Output} from '@angular/core';
import {AppState} from '../app.service';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {Conversation} from "./conversation";
import {FormBuilder, Validators, Control} from "@angular/common";


@Component({
    selector: 'chat-send',
    providers: [],
    viewProviders: [],
    directives: [],
    pipes: [],
    template: `
    <form [ngFormModel]="form" (submit)="emitSend()">
        <md-input style="width:100%" placeholder="Type your message and press Enter" required type="text" ngControl="body" ></md-input>
    </form>
`
})
export class ChatSend implements OnInit {
    @Input() private conversations = null;
    @Input() private activeConversation = null;
    @Output() send: EventEmitter<any> = new EventEmitter();

    form:any;

    constructor(private builder: FormBuilder) {
        const body = new Control('', Validators.required);

        this.form = builder.group({
            body: body
        });
    }

    ngOnInit() {
    }

    emitSend() {
        this.send.emit({value: this.form.value});
        (<Control>this.form.controls['body']).updateValue('');
    }
}
