import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heros: Hero[], orderBy: string = 'null'): Hero[] {

    switch (orderBy) {
      case 'fly':
          return heros.sort( (a, b) => ( a.fly > b.fly ) ? -1 : 1)
          break;
      case 'color':
        return heros.sort( (a, b) => ( a.color > b.color ) ? 1 : -1)        
        break;     
      default:
        return heros.sort( (a, b) => ( a.name > b.name ) ? 1 : -1)
        break;
    }    
  }

}
