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

  return true;
};
