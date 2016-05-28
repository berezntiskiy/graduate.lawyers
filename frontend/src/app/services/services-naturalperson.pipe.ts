import { Pipe, PipeTransform } from '@angular/core';
import {Service} from "./service";

@Pipe({name: 'servicesNaturalpersonFilter'})
export class ServicesNaturalpersonPipe implements PipeTransform {
    transform(value: Service[], naturalperson: boolean):Service[] {
        // return value;
        return value.filter(service => service.naturalperson == naturalperson);
    }
}