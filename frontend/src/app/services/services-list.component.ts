import {Component, Input} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";
import {ServiceItem} from "./service-item.component";

@Component({
    selector: 'services-list',
    providers: [
        ServiceService
    ],
    directives: [
        ServiceItem
    ],
    pipes: [
        ServicesNaturalpersonPipe
    ],
    styles: [`
  `],
    template: `
    <div *ngIf="isLoading">
        <md-progress-circle mode="indeterminate" color="primary"></md-progress-circle>
    </div>
    <div *ngIf="!isLoading">
        <service-item [service]="service" *ngFor="let service of services | servicesNaturalpersonFilter: naturalperson"></service-item>
    </div>
  `
})
export class ServicesList {
    @Input() services:Service[];
    @Input() isLoading:boolean;
    @Input() naturalperson:boolean;
}
