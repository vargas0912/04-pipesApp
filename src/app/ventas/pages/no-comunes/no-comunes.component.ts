import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //? i18nSelectPipe
  name: string = 'Gerardo'; 
  genre: string = 'male';
  inviteMap = {
    'female': 'invitarla',
    'male': 'invitarlo'
  }

  //i18nPluralPipe

  customers: string[] = ['Pedro', 'Jose', 'Maria', 'Estela', 'Ricardo'];
  customerMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeName(){
    this.name = "Melisa"
    this.genre = 'female'
  }

  deleteCustomer(){
    this.customers.pop();
  }

  person = {
    name: 'Gerardo',
    address: 'Irapuato, Gto',
    age: 40
  }

  miObservable = interval(1000);
}
