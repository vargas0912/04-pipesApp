import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { CanFlyPipe } from './pipes/canFly.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    //components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    //pipes
    CanFlyPipe,
    ColorPipe,
    MayusculasPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent    
  ]
})
export class VentasModule { }
