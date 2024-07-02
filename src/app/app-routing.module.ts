import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

const routes: Routes = [

  //routeo componente inicio al inciar la página (mientras cargan modulos)
  {
    path: '',component:InicioComponent
  },

  //routeo modulo inicio
  {
    path: 'inicio'
    ,loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  //routeo modulo autentificacion
  {
    path: 'autentificacion'
    ,loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  },

  //routeo modulo producto
  {
    path: 'producto'
    ,loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
