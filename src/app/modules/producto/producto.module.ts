import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { LibrosComponent } from './page/libros/libros.component';
import { SeparadoresComponent } from './page/separadores/separadores.component';
import { OfertasComponent } from './page/ofertas/ofertas.component';
import { TodosproductosComponent } from './page/todosproductos/todosproductos.component';


@NgModule({
  declarations: [
    LibrosComponent,
    SeparadoresComponent,
    OfertasComponent,
    TodosproductosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoRoutingModule,
    LibrosComponent,
    SeparadoresComponent,
    OfertasComponent
  ]
})
export class ProductoModule { }
