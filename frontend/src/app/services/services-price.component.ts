import {Component, Input} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";

@Component({
    selector: 'services-price',
    styles: [`
    .price {color: tomato; border: 1px solid tomato; padding: 7px; margin: 7px; float: right; border-radius: 3px}
  `],
    template: `
    <div class="price">
        <span *ngIf="start == end">{{start}}</span><span *ngIf="start != end">{{start}} - {{end}}</span> MDL    
    </div>
  `
})
export class ServicesPrice {
    @Input() start = 0;
    @Input() end = 0;
}
