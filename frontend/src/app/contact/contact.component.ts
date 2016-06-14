import {Component} from '@angular/core';
import {ContactOffices} from "./contact-offices.component";
import {Office} from "./office";
import {ContactLetter} from "./contact-letter.component";

@Component({
    directives: [
        ContactOffices,
        ContactLetter
    ],
    selector: 'contact',
    styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
    
    
    
  `],
    template: `
  <md-card style="padding:0;">
    <contact-offices
        zoom="8"
        [offices]="offices"
        [lat]="lat"
        [lng]="lng"
    ></contact-offices>
  </md-card>
  <md-card>
    <contact-letter></contact-letter>
  </md-card>

  `
})
export class Contact {
    private offices:any[] = [
        {
            id: 1,
            created_at: "2016-06-10 21:59:12",
            updated_at: "2016-06-10 21:59:12",
            lat: 10,
            lng: 10,
            phones: [
                '111-222'
            ],
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
            name: "name #1",
            phone: "1(111)111111111",
            address: "address 1 address 1 address 1 address 1 address 1 address 1 address 1 address 1 address 1 address 1 address 1"
        },
        {
            id: 2,
            created_at: "2016-06-10 21:59:12",
            updated_at: "2016-06-10 21:59:12",
            lat: 20,
            lng: 20,
            phones: [
                '111-222'
            ],
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
            name: "name #2",
            phone: "2(222)222222222",
            address: "address 2 address 2 address 2 address 2 address 2 address 2 address 2 address 2 address 2 address 2 address 2"
        },
        {
            id: 3,
            created_at: "2016-06-10 21:59:12",
            updated_at: "2016-06-10 21:59:12",
            lat: 30,
            lng: 30,
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
            name: "name #3",
            phone: "3(333)333333333",
            address: "address 3 address 3 address 3 address 3 address 3 address 3 address 3 address 3 address 3 address 3 address 3"
        },
        {
            id: 4,
            created_at: "2016-06-10 21:59:12",
            updated_at: "2016-06-10 21:59:12",
            lat: 40,
            lng: 40,
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
            name: "name #4",
            phone: "4(444)444444444",
            address: "address 4 address 4 address 4 address 4 address 4 address 4 address 4 address 4 address 4 address 4 address 4"
        },
        {
            id: 5,
            created_at: "2016-06-10 21:59:12",
            updated_at: "2016-06-10 21:59:12",
            lat: 50,
            lng: 50,
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
            name: "name #5",
            phone: "5(555)555555555",
            address: "address 5 address 5 address 5 address 5 address 5 address 5 address 5 address 5 address 5 address 5 address 5"
        },
        {
            id: 6,
            created_at: "2016-06-10 21:59:12",
            updated_at: "2016-06-10 21:59:12",
            lat: 60,
            lng: 60,
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
            name: "name #6",
            phone: "6(666)666666666",
            address: "address 6 address 6 address 6 address 6 address 6 address 6 address 6 address 6 address 6 address 6 address 6"
        }
    ];
    private lat;
    private lng;

    constructor() {
        this.lat = this.offices[0].lat;
        this.lng = this.offices[0].lng;

        // var i=0;
        // setInterval(() => {
        //     i++;
        //     this.lat = this.offices[i].lat;
        //     this.lng = this.offices[i].lng;
        //     if(i >= this.offices.length - 1) i = 0;
        // }, 2000);
    }

    ngOnInit() {
    }

}
