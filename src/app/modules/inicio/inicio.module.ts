import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './page/inicio/inicio.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    InicioComponent,
    CarruselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ]
})
export class InicioModule { }
