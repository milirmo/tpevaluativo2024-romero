import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module'; //importo modulo shared
import { environment } from 'src/environments/environment'; //vincula a la BD con la APP
import { AngularFireModule } from '@angular/fire/compat'; //trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //trabaja con imagenes y archivos
import { InicioModule } from './modules/inicio/inicio.module'; //modulo inicio
import { ProductoModule } from './modules/producto/producto.module'; //modulo productos
import { AutentificacionModule } from './modules/autentificacion/autentificacion.module'; //modulo autentificacion

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //modulos
    SharedModule,
    InicioModule,
    ProductoModule,
    AutentificacionModule,


    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
