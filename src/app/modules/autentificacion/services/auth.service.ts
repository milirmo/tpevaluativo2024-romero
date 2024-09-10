import { Injectable } from '@angular/core';
//servicio de la nube de autentificacion de firebase 
import { AngularFireAuth } from '@angular/fire/compat/auth';
//importo servicio firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  obtenerUsuario(email: string){
    return this.servicioFireStore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
}
