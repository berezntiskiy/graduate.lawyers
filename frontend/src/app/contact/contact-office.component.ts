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
        background: #9c27b0;
        color: white;
    }
    .active .phone {color:white}
    .phone {
        color: #999;
        float:right;
        margin-left: 15px;
    }
    
  `],
    template: `
    <div class="root" [ngClass]="{active:active}" (click)="emitOpen(office)">
        {{office.name}}
        <div>
            <small>{{office.address}}</small> <small class="phone">{{office.phone}}</small>
        </div>
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
