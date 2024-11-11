import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './page/carrito/carrito.component';
import { PedidoComponent } from './components/pedido/pedido.component';


@NgModule({
  declarations: [
    CarritoComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ],
  exports: [
    CarritoComponent
  ]
})
export class CarritoModule { }
