import { Pipe, PipeTransform } from '@angular/core'
import { Color } from '../interfaces/ventas.interfaces';

@Pipe(
    {
        name: 'color'
    }
)
export class ColorPipe implements PipeTransform {
    transform(value: Color): string {        
        switch (value) {
            case Color.Blue:
                return  'blue';
                break;
            case Color.Red:
                return 'red';
                break;
            case Color.Black:
                return 'black';
                break;
            case Color.Green:
                return 'green';
                break;
            default:
                break;
        }
        return '';    
    }
    
}