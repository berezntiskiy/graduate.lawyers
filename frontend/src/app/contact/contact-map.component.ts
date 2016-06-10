import {Component, Input, Output, EventEmitter} from '@angular/core';


import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';
import {Marker} from "angular2-google-maps/services/google-maps-types";
import {Office} from "./office";


@Component({
    selector: 'contact-map',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
    providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS],
    styles: [`
    .sebm-google-map-container {
       height: 400px;
     }
  `],
    template: `
    <sebm-google-map 
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      [zoomControl]="false">
    
      <sebm-google-map-marker 
          *ngFor="let m of offices; let i = index"
          (markerClick)="clickedMarker(m)"
          [latitude]="m.lat"
          [longitude]="m.lng">
      </sebm-google-map-marker>

    </sebm-google-map>
`
})
export class ContactMap {
    @Input() zoom:number = 8;
    @Input() lat:number = 0;
    @Input() lng:number = 0;
    @Input() offices:Office[] = [];
    @Output() choose = new EventEmitter();


    clickedMarker(office:Office) {
        this.choose.emit({value: office});
    }
}
