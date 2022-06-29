import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    transform(value: string, parmMayus: boolean = true): string {

        return ( parmMayus ) ? value.toUpperCase() : value.toLowerCase();
            
    }
}