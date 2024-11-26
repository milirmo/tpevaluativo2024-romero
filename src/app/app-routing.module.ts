import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

// Guardián para la vista de Administrador
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';

const routes: Routes = [

  //routeo componente inicio al inciar la página (mientras cargan modulos)
  {
    path: '', component:InicioComponent
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
    ,loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    // definimos al guardian que proteja la ruta de Admin y que espere un rol de tipo "admin"
    canActivate: [ rutaProtegidaGuard ], data: { role: 'admin' }
  },

  //routeo modulo acerca de / sobre nosotros
  {
    path: ''
    ,loadChildren: () => import('./modules/sobrenosotros/sobrenosotros.module').then(m => m.SobrenosotrosModule)
  },

   //routeo modulo carrito
   {
    path: ''
    ,loadChildren: () => import('./modules/carrito/carrito.module').then(m => m.CarritoModule)
  },

  //routeo modulo contacto
  {
    path: ''
    ,loadChildren: () => import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
