import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'onlyLiked'})
export class OnlyLikedPipe implements PipeTransform {
    transform(value:any[], state:boolean):any[] {
        if (!value) return value;
        if (!state) return value;
        return value.filter(entity => entity.likes == true);
    }
}