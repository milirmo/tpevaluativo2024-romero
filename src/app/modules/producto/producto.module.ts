import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TodosproductosComponent } from './page/todosproductos/todosproductos.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    TodosproductosComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
