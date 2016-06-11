import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {FormBuilder, Validators, Control} from "@angular/common";


@Component({
    selector: 'contact-letter',
    providers: [],
    viewProviders: [],
    directives: [],
    pipes: [],
    template: `
    <form [ngFormModel]="form" (submit)="emitSend()">
        <md-input style="width:100%" placeholder="Name" required type="text" ngControl="name" ></md-input>
        <md-input style="width:100%" placeholder="Email" required type="text" ngControl="email" ></md-input>
        <md-input style="width:100%" placeholder="Phone" required type="text" ngControl="phone" ></md-input>
        <md-input style="width:100%" placeholder="Message" required type="textarea" ngControl="body" ></md-input>
        
        <button md-raised-button color="primary" type="submit">Send</button>
    </form>
`
})
export class ContactLetter implements OnInit {
    @Input() private conversations = null;
    @Input() private activeConversation = null;
    @Output() send: EventEmitter<any> = new EventEmitter();

    form:any;

    constructor(private builder: FormBuilder) {
        const name = new Control('', Validators.required);
        const email = new Control('', Validators.required);
        const phone = new Control('', Validators.required);
        const body = new Control('', Validators.required);

        this.form = builder.group({
            name: name,
            phone: phone,
            email: email,
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
