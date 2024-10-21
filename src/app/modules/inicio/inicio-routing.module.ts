import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';

const routes: Routes = [
  
  //routeo componente inicio al inciar la página (mientras cargan modulos)
  {
    path: '', component: InicioComponent
  },

  //routeo para modulo inicio > componente inicio
  { 
    path: 'inicio', component: InicioComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
