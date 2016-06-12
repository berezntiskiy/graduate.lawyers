import {Component, Input} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";
import {ServicePrice} from "./service-price.component";

@Component({
    selector: 'service-item',
    directives: [
        ServicePrice
    ],
    styles: [`
    .item {
      overflow: auto;
      zoom: 1;
      border-bottom: 1px solid #ccc;
      padding: 15px;
    }
    .text {
        padding: 15px 15px 15px 45px;
        box-sizing: border-box;
    }
  `],
    template: `
    <div class="item">
        <service-price [start]="service.price_start" [end]="service.price_end"></service-price>
        <h3 (click)="showText = !showText">{{service.title}}</h3>
        <div class="text" *ngIf="showText">{{service.text}}</div>
    </div>
  `
})
export class ServiceItem {
    @Input() service:Service;
    showText = false;
}
