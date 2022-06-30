import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'can_fly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): string {
        return ( value ) ? 'yes' : "not"
    }
}