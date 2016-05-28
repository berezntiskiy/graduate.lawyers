import {Component} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";

@Component({
    selector: 'services',
    providers: [
        ServiceService
    ],
    pipes: [
        ServicesNaturalpersonPipe
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
    For hot module reloading run
    <pre>npm run start:hmr</pre>
  </md-card>
  <md-card>
    <h3>
      patrick@AngularClass.com
    </h3>
        <div class="naturalpersonToggler">
            <span (click)="naturalperson=true" [ngClass]="{active: naturalperson}">
                Физ лицо
            </span>
            <span (click)="naturalperson=false" [ngClass]="{active: !naturalperson}">
                Юр лицо
            </span>
        </div>
        <div *ngIf="loadingServices">
            <md-progress-circle mode="indeterminate" color="primary"></md-progress-circle>
        </div>
        <div *ngIf="!loadingServices">
            <ul>
                <li *ngFor="let service of services | servicesNaturalpersonFilter: naturalperson">{{service | json}}</li>
            </ul>
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
