import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { last } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem [] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas', 
            icon: 'pi pi-align-left',  
            routerLink: '/'                
          },
          {
            label: 'Numeros', 
            icon: 'pi pi-dollar',  
            routerLink: 'numeros'                
          },
          {
            label: 'No comunes', 
            icon: 'pi pi-globe',  
            routerLink: 'no-comunes'                
          },                    
        ]
      },
      {
        label: 'Personalizados',
        icon: 'pi pi-apple',
        routerLink: 'ordenar'
      }
      
  ]; 
  }

}
