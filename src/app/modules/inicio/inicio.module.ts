import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './page/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';
import { OfertaComponent } from './components/oferta/oferta.component';

import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    OfertaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    CardComponent,
    MatIconModule
  ]
})
export class InicioModule { }
