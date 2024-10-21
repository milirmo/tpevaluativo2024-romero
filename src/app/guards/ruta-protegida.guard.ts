import { CanActivateFn } from '@angular/router';

//inject -> inyección de servicios
import { inject } from '@angular/core';

import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

//operadores tipo "observables"
import { map, switchMap, of, from } from 'rxjs';


export const rutaProtegidaGuard: CanActivateFn = (route, state) => {

  //inyectamos / instanciamos servicio de autentificación en el guardian (forma local)
  const servicioAuth = inject(AuthService);

  //inyectamos / instanciamos servicio de rutas en forma local
  const servicioRutas = inject(Router);

  //especificamos cual es el rol que va a esperar el guardian para activarse
  const rolEsperado = "admin";

  //FROM convierte una promesa en observable
  return from(servicioAuth.obteneruid()).pipe(
    switchMap(uid => {
      //si uid existe, lo envía por parámetro y busca rol del usuario
      if(uid){
        return servicioAuth.obtenerRol(uid).pipe(
          map (rol => {
            if(rol === rolEsperado){
              //Si el rol del usuario coincide con el rol esperado (admin), se da acceso a la ruta
              console.log("Usuario verificado como administrador.")
              return true;
            }else{
              //no permite acceso a la ruta
              return false;
            }
          })
        )
      }else{
        console.log("Usuario no validado. Permisos insuficientes.")

        //redireccionamos acceso para usuarios no validados (visitantes o no registrados)
        return of(servicioRutas.createUrlTree(['/inicio']))
      }
    })
  )
};
