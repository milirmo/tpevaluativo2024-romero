import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importaciones de form field (input)
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//importamos componente raíz de Angular
import { FormsModule } from '@angular/forms';
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciodesesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    RegistroComponent,
    IniciodesesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, //componente raíz de Angular importado
    MatSelectModule
  ],

  //exportamos componentes del modulo (registro e inicio de sesion)
  exports: [
    RegistroComponent,
    IniciodesesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, //componente raíz de Angular exportado
    MatSelectModule
    
  ]
})
export class AutentificacionModule { }
