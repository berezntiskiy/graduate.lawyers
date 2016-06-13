import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'liked'})
export class LikedPipe implements PipeTransform {
    transform(value: any[], likes: boolean):any[] {
        if (!value) return null;
        return value.filter(entity => entity.likes == likes);
    }
}