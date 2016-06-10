import {Component, Input} from '@angular/core';
import {ContactMap} from "./contact-map.component";
import {Marker} from "angular2-google-maps/services/google-maps-types";
import {Office} from "./office";
import {ContactOffice} from "./contact-office.component";

@Component({
    directives: [
        ContactMap,
        ContactOffice
    ],
    selector: 'contact-offices',
    styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
    
    
    .root {
        display: flex;
        justify-content: space-between;
    }
    
    .item {
        flex: 1 100%;
    }
    
    sidebar {
        flex: 1 auto;
    }
    
    content {
        flex: 10 auto;
    }
    
    
  `],
    template: `
    <div class="root">
        <div class="item">
            <contact-office (open)="setActiveOffice($event.value)" [office]="office" [active]="office == activeOffice" *ngFor="let office of offices;" activeOffice=""></contact-office>
        </div>
        <contact-map
            class="item"
            zoom="8"
            [offices]="offices"
            [lat]="lat"
            [lng]="lng"
            (choose)="setActiveOffice($event.value)"
        ></contact-map>
    </div>
  `
})
export class ContactOffices {
    @Input() private offices:Office[] = [];
    @Input() private lat:number = 0;
    @Input() private lng:number = 0;
    activeOffice:Office = null;

    constructor() {
    }

    ngOnInit() {
        if (this.offices[0])
            this.setActiveOffice(this.offices[0]);
    }

    setActiveOffice(office:Office) {
        this.activeOffice = office;
        this.lat = office.lat;
        this.lng = office.lng;
    }

}
