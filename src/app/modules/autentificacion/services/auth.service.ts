import { Injectable } from '@angular/core';

//servicio de la nube de autentificacion de firebase 
import { AngularFireAuth } from '@angular/fire/compat/auth';
//importo servicio firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//import observables para obtener cambios
import { Observable } from 'rxjs';
//importacion para iterar colección leyendo información actual
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //propiedad privada para guardar rol de usuario
  private rolUsuario: string | null = null;

  //el constructor inicializa un objeto / le da vida 
  //referenciar auth service de firebase en el servicio
  //referenciar servicioFireStore en el servicio
  constructor(
    public auth: AngularFireAuth,
    public servicioFireStore: AngularFirestore,
  ) { }

  //FUNCION PARA REGISTRAR
  registrar(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  };


  //FUNCION PARA INICIAR SESION
  iniciosesion(email: string, password: string) {
    //validar la informacion del usrio saber si existe en la coleccion
    return this.auth.signInWithEmailAndPassword(email, password)
  };

  //FUNCION PARA CERRAR SESION
  cerrarsesion() {
    //devuelve una promesa vacia quita token
    return this.auth.signOut();
  };

  //FUNCION PARA TOMAR UID
  async obteneruid() {
    const user = await this.auth.currentUser;

    if (user == null) {
      return null;
    } else {
      return user.uid;
    }
  }

  //FUNCION PARA OBTENER USUARIO
  obtenerUsuario(email: string){
    return this.servicioFireStore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }

  //FUNCION PARA OBTENER ROL DEL USUARIO
  obtenerRol(uid: string): Observable<string | null> {
    /*
    accedemos a coleccion de usuarios, buscando por uid, obteniendo cambios en valores. 
    al enviar info por tubería, mapeamos la colección, obtenemos usuario específico y buscamos atributo rol, aún si éste es nulo.
    */
    return this.servicioFireStore.collection("usuarios").doc(uid).valueChanges()
    .pipe(map((usuario: any) => usuario ? usuario.rol: null));
  }

  //FUNCION PARA ENVIAR EL ROL OBTENIDO -> asignarlo al rol de la variable local
  setUsuarioRol(rol: string){
    this.rolUsuario = rol; //recibe rol del usuario y lo envía a la propiedad rolUsuario que creamos
  }

  //FUNCION PARA OBTENER ROL Y RETORNAR
  getUsuarioRol(): string | null {
    return this.rolUsuario;
  }
}
