import {Component, Input} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";
import {ServicesItem} from "./services-item.component";

@Component({
    selector: 'services-list',
    providers: [
        ServiceService
    ],
    directives: [
        ServicesItem
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
        <services-item [service]="service" *ngFor="let service of services | servicesNaturalpersonFilter: naturalperson"></services-item>
    </div>
  `
})
export class ServicesList {
    @Input() services:Service[];
    @Input() isLoading:boolean;
    @Input() naturalperson:boolean;
}
