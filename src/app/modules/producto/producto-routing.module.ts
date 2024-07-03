import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './page/libros/libros.component';
import { OfertasComponent } from './page/ofertas/ofertas.component';
import { TodosproductosComponent } from './page/todosproductos/todosproductos.component';

const routes: Routes = [

  //routeo al modulo producto > libros
  { 
    path: 'libros', component: LibrosComponent
  },

  //routeo al modulo producto > todo
  { 
    path: 'todos-los-productos', component: TodosproductosComponent
  },

  //routeo al modulo producto > ofertas y combos
  { 
    path: 'ofertas', component: OfertasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
