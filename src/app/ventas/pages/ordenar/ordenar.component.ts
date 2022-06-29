import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',  
  styles: [
  ]
})
export class OrdenarComponent  {
  inMayus: boolean = false

  toggleMayus(){
    this.inMayus = !this.inMayus;
  }

}
