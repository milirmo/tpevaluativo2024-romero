import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TodosproductosComponent } from './page/todosproductos/todosproductos.component';
import { CardComponent } from './components/card/card.component';
import { FiccionComponent } from './page/ficcion/ficcion.component';
import { RomanceComponent } from './page/romance/romance.component';
import { PolicialComponent } from './page/policial/policial.component';
import { CardFiccionComponent } from './components/card-ficcion/card-ficcion.component';
import { CardPolicialComponent } from './components/card-policial/card-policial.component';
import { CardRomanceComponent } from './components/card-romance/card-romance.component';
import { CardThrillerComponent } from './components/card-thriller/card-thriller.component';
import { ThrillerComponent } from './page/thriller/thriller.component';


@NgModule({
  declarations: [
    CardComponent,

    TodosproductosComponent,
    FiccionComponent,
    RomanceComponent,
    PolicialComponent,
    ThrillerComponent,

    CardFiccionComponent,
    CardPolicialComponent,
    CardRomanceComponent,
    CardThrillerComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    CardComponent,

    TodosproductosComponent,
    FiccionComponent,
    RomanceComponent,
    PolicialComponent,
    ThrillerComponent,

    CardFiccionComponent,
    CardPolicialComponent,
    CardRomanceComponent,
    CardThrillerComponent
  ]
})
export class ProductoModule { }
