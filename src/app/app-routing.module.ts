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
    path: ''
    ,loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  //routeo modulo autentificacion
  {
    path: ''
    ,loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  },

  //routeo modulo producto
  {
    path: ''
    ,loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },

  //routeo modulo admin
  {
    path: ''
    ,loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },

  //routeo modulo acerca de / sobre nosotros
  {
    path: ''
    ,loadChildren: () => import('./modules/sobrenosotros/sobrenosotros.module').then(m => m.SobrenosotrosModule)
  },

  //routeo modulo preguntas frecuentes (faqs)
  {
    path: ''
    ,loadChildren: () => import('./modules/faqs/faqs.module').then(m => m.FaqsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
