import {Component} from '@angular/core';
import {ServiceService} from "./service.service";
import {Service} from "./service";
import {ServicesNaturalpersonPipe} from "./services-naturalperson.pipe";
import {TranslatePipe} from "ng2-translate/ng2-translate";
import {ServicesPersonType} from "./services-persontype.component";
import {ServicesList} from "./services-list.component";

@Component({
    selector: 'services',
    providers: [
        ServiceService
    ],
    directives: [
        ServicesList,
        ServicesPersonType
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
    .help {
        text-align: center; display: block; color: #009688; padding: 18px 0 0;
    }
  `],
    template: `
  <md-card>
    <services-persontype [naturalperson]="naturalperson" (change)="naturalperson=$event.value"></services-persontype>
    <services-list [isLoading]="loadingService" [naturalperson]="naturalperson" [services]="services"></services-list>
    <small class="help">Для просмотра подробной информации об услуге кликните на нее</small>
  </md-card>
  `
})
export class Services {
    services:Service[] = [];
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
