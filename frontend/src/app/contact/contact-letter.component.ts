import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {FormBuilder, Validators, Control} from "@angular/common";
import {ContactService} from "./contact.service";

enum Status {
    success,
    failed
}

@Component({
    selector: 'contact-letter',
    providers: [
        ContactService
    ],
    viewProviders: [],
    directives: [],
    pipes: [],
    styles: [`
      .bad {
        color: tomato;
        margin: 5px 0 15px;
      }
`],
    template: `
    <form [ngFormModel]="form" (submit)="send()">
        <md-input style="width:100%" placeholder="Name" required type="text" ngControl="name" ></md-input>
        <md-input style="width:100%" placeholder="Email" required type="text" ngControl="email" ></md-input>
        <md-input style="width:100%" placeholder="Phone" required type="text" ngControl="phone" ></md-input>
        <md-input style="width:100%" placeholder="Message" required type="textarea" ngControl="body" ></md-input>
        
        <div class="bad" [ngSwitch]="status">
            <div *ngSwitchWhen="statuses.success">
                We will reply as soon as possible.
            </div>
            <div *ngSwitchWhen="statuses.failed">
                Something went wrong, please try again.
            </div>
        </div>
        
        <button md-raised-button color="primary" [disabled]="sending" type="submit">Send</button>
    </form>
`
})
export class ContactLetter implements OnInit {
    @Input() private conversations = null;
    @Input() private activeConversation = null;
    private status;
    private statuses = Status;
    private sending = false;
    form:any;

    constructor(private builder:FormBuilder, private contactService:ContactService) {
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

    send() {
        this.status = null;
        this.sending = true;
        this.contactService.send(this.form.value).subscribe(() => {
            (<Control>this.form.controls['body']).updateValue('');
            this.status = Status.success;
            this.sending = false;
        }, () => {
            this.status = Status.failed;
            this.sending = false;
        });
    }
}
