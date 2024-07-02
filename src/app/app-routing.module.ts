import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //routeo modulo inicio al inciar la página (mientras cargan modulos)
  {
    path: ''
    ,loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
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
