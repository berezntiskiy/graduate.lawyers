import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ContactMap} from "./contact-map.component";
import {Marker} from "angular2-google-maps/services/google-maps-types";
import {Office} from "./office";
import {ContactPhone} from "./contact-phone.component";

@Component({
    directives: [
        ContactMap,
        ContactPhone
    ],
    selector: 'contact-office',
    styles: [`
    .root {
        padding: 5px;
    }
    .active {
        background: #ccc;
    }
    
  `],
    template: `
    <div class="root" (click)="emitOpen(office)">
        {{active ? 'ACTIVE' : ''}}
        {{office.name}}<br>
        <small>{{office.address}}</small>
        <!--todo-->
        <contact-phone *ngFor="let p of phones;" [phone]="p"></contact-phone>
    </div>
  `
})
export class ContactOffice {
    @Input() private office:Office;
    @Input() private active:boolean;
    @Output() private open = new EventEmitter();

    constructor() {
    }

    emitOpen(office) {
        this.open.emit({value: office});
    }

}
