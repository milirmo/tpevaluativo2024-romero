import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosproductosComponent } from './page/todosproductos/todosproductos.component';
import { FiccionComponent } from './page/ficcion/ficcion.component';
import { PolicialComponent } from './page/policial/policial.component';
import { RomanceComponent } from './page/romance/romance.component';
import { ThrillerComponent } from './page/thriller/thriller.component';

const routes: Routes = [

  //routeo al modulo producto > todo
  { 
    path: 'todos-los-productos', component: TodosproductosComponent
  },

  //routeo al modulo producto > ficción
  { 
    path: 'productos-ficcion', component: FiccionComponent
  },

  //routeo al modulo producto > policiales
  { 
    path: 'productos-policial', component: PolicialComponent
  },

  //routeo al modulo producto > romance
  { 
    path: 'productos-romance', component: RomanceComponent
  },

  //routeo al modulo producto > terror
  { 
    path: 'productos-thriller', component: ThrillerComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
