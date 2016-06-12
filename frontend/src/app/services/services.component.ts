import {Component} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";
import {ServicesItem} from "./services-item.component";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'services',
    providers: [
        ServiceService
    ],
    directives: [
        ServicesItem
    ],
    pipes: [
        ServicesNaturalpersonPipe,
        TranslatePipe
    ],
    styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
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
  <md-card>
        <div class="naturalpersonToggler">
            <span (click)="naturalperson=true" [ngClass]="{active: naturalperson}">
                {{"services.person" | translate }}
            </span>
            <span (click)="naturalperson=false" [ngClass]="{active: !naturalperson}">
                {{"services.company" | translate }}
            </span>
        </div>
        <div *ngIf="loadingServices">
            <md-progress-circle mode="indeterminate" color="primary"></md-progress-circle>
        </div>
        <div *ngIf="!loadingServices">
            <services-item [service]="service" *ngFor="let service of services | servicesNaturalpersonFilter: naturalperson"></services-item>
        </div>
  </md-card>

  `
})
export class Services {
    services:Service[];
    loadingServices:boolean;
    naturalperson:boolean;

    constructor(private serviceService:ServiceService) {
        this.naturalperson = true;
    }

    ngOnInit() {
        this.fetchService();
    }

    fetchService() {
        this.loadingServices = true;
        this.serviceService.getList().subscribe(data => {
            this.services = data;
            this.loadingServices = false;
        })
    }
}
