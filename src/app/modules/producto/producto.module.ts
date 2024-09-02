import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { LibrosComponent } from './page/libros/libros.component';
import { OfertasComponent } from './page/ofertas/ofertas.component';
import { TodosproductosComponent } from './page/todosproductos/todosproductos.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    LibrosComponent,
    OfertasComponent,
    TodosproductosComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoRoutingModule,
    LibrosComponent,
    OfertasComponent
  ]
})
export class ProductoModule { }
