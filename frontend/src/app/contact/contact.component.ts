import {Component} from '@angular/core';
import {ContactMap} from "./contact-map.component";

@Component({
    directives: [
        ContactMap
    ],
    selector: 'about',
    styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
  `],
    template: `
  <md-card style="padding:0">
    <contact-map
        zoom="8"
        [markers]="markers"
        lat="51.673858"
        lng="7.815982"
    ></contact-map>
  </md-card>
  <md-card>
    
  </md-card>

  `
})
export class Contact {
    markers = [
        {
            lat: 51.673858,
            lng: 7.815982
        },
        {
            lat: 51.373858,
            lng: 7.215982
        },
        {
            lat: 51.723858,
            lng: 7.895982
        }
    ];

    constructor() {

    }

    ngOnInit() {
    }

}
