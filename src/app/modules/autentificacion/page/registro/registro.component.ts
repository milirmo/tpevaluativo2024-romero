import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

//importamos servicio de autentificación
import { AuthService } from '../../services/auth.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
//importamos paquetería de criptación
import * as CryptoJS from 'crypto-js';
//importamos paquetería de alertas personalizadas
import Swal from 'sweetalert2';

@Component({
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  hide = true;

  //importaciones de interfaz 'Usuario'
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  //importamos interfaz Usuario (inicializar)
  usuarios: Usuario = {
    //comillas simples por tipo string
    //"0" (CERO) para los tipo number
    uid: '',
    nombre: '',
    email: '',
    rol: 'usuario', // -> al registrarse, todos los usuarios serán "visitante"
    password: ''
  }

  //creamos colección de usuarios, del tipo usuario, y lo definimos para que reciba arreglos
  coleccionUsuarios: Usuario[] = [];

  //función para registro de nuevos usuarios
  async registrarUsuarios() {

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    }

    const rta = await this.servicioAuth.registrar(credenciales.email, credenciales.password)

      //el metodo THEN es una promesa que devuelve el mismo valor si todo sale bien
      .then(rta => {
        Swal.fire({
          title: "¡Todo correcto!",
          text: "El registro se completó correctamente. ¡Bienvenido/a!",
          icon: "success"
        });

        this.servicioRutas.navigate(['/inicio']);
      })

      //el metodo CATCH captura una falla y devuelve un error cuando la promesa salga mal
      .catch(error => {
        Swal.fire({
          title: "Error al registrarse...",
          text: "Hubo un error al intentar registrar usuario: \n" + error, // "\n"+error)" para mostrar el error ocurrido
          icon: "error"
        });
      })

    //constante UID captura el identificador de la BD
    const uid = await this.servicioAuth.obteneruid();

    //se le asigna al atributo de la interfaz esta constante
    this.usuarios.uid = uid;

  /*
  SHA256: algoritmo de hash seguro, que toma una entrada (ej:contraseña) 
  y produce una cadena de caracteres hexadecimal que represente a su hash.
  toString: convierte en una cadena de caracteres.
  */
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    //llamamos a la función que guarda usuarios
    this.guardarUsuarios();

    //llamamos a la función para limpiar inputs
    this.limpiarInputs();

  }

  //FUNCION GUARDAR USUARIOS
  async guardarUsuarios() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('Error =>', err);
      })
  }

  //FUNCION VACIAR INPUTS
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = 'visitante',
      password: this.usuarios.password = ''
    }
  }
}