import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',  
  styles: [
  ]
})
export class OrdenarComponent  {
  inMayus: boolean = false;

  orderBy: string = 'name';

  heros: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.Blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.Black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.Red
    },
    {
      name: 'Darevil',
      fly: false,
      color: Color.Black
    },
    {
      name: 'Linterna verde',
      fly: true,
      color: Color.Green
    }
  ]

  toggleMayus(){
    this.inMayus = !this.inMayus;
  }

  changeOrder(value:string){
    this.orderBy = value;
  }

}
