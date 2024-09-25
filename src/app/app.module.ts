import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ruta padre --> modulo raíz
import { AppRoutingModule } from './app-routing.module';

//archivo component general
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//solo importamos componentes globales (los q aparecen en toda la página)
import { SharedModule } from './modules/shared/shared.module';

// FIREBASE  --> importamos HERRAMIENTAS de la Base de Datos
import { environment } from 'src/environments/environment'; //vincula la BD con la App
import { AngularFireModule } from '@angular/fire/compat'; //trabaja con las colecciones de interfaces
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //trabaja con imágenes y archivos

import { InicioModule } from './modules/inicio/inicio.module'; //modulo inicio
import { ProductoModule } from './modules/producto/producto.module'; //modulo productos
import { AutentificacionModule } from './modules/autentificacion/autentificacion.module';


@NgModule({
  declarations: [
    AppComponent,
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
