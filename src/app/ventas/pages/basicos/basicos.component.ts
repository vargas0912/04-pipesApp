import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = "gerardo";
  nombreUper: string = "GERARDO";
  nombreTitle: string = "gerArdo vArGas";

  fecha: Date = new Date;

}
