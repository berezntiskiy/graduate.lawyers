import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'services-persontype',
    providers: [
        ServiceService
    ],
    directives: [
    ],
    pipes: [
        ServicesNaturalpersonPipe
    ],
    styles: [`
    .active {
        font-size: 1.3em;
        color: tomato;
        margin: 0 15px;
    }
    .naturalpersonToggler {
        text-align: center;
    }
  `],
    template: `
    <div class="naturalpersonToggler">
        <span (click)="emitNewType(true)" [ngClass]="{active: naturalperson}">
            {{"services.person" | translate }}
        </span>
        <span (click)="emitNewType(false)" [ngClass]="{active: !naturalperson}">
            {{"services.company" | translate }}
        </span>
    </div>
  `
})
export class ServicesPersonType {
    @Input() naturalperson:boolean;
    @Output() change = new EventEmitter();

    emitNewType(type) {
        this.change.emit({value: type})
    }
}
