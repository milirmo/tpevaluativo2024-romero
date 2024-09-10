import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciodesesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [

  //routeo para modulo autentificacion > componente inicio de sesion
  { 
    path: 'inicio-sesion', component: IniciodesesionComponent
  },

  //routeo para modulo autentificacion > componente registro
  { 
    path: 'registro', component: RegistroComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
