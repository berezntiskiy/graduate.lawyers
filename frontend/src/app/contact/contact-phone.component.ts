import {Component, Input} from '@angular/core';
import {ContactMap} from "./contact-map.component";
import {Marker} from "angular2-google-maps/services/google-maps-types";
import {Office} from "./office";

@Component({
    directives: [
        ContactMap
    ],
    selector: 'contact-phone',
    styles: [`
  `],
    template: `
    Телефон: {{phone}}
  `
})
export class ContactPhone {
    @Input() private phone:string;

    constructor() {
    }

    ngOnInit() {
    }

}
