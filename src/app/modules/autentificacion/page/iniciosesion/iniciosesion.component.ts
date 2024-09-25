import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; //importamos la interfaz Usuario de models
import { AuthService } from '../../services/auth.service'; //importamos servicio de autentificación
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service'; //importamos servicio de firestore
import { Router } from '@angular/router'; //importamos componente de rutas de angular

//importamos paquetería de alertas personalizadas
import Swal from 'sweetalert2';

//importamos paquetería de criptación
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-iniciodesesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {

  hide = true;

  //definimos interfaz Usuario (inicializar)
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    edad: 0,
    rol: '',
    password: ''
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  //función para iniciar sesión
  async iniciarSesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    // bloque "try" encapsula la info que funciona bien
    try {
      //obtenemos usuario de la base de datos
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      //condicional verificada que ese usuario de la BD existiera o sea igual al de nuestra colección
      if (!usuarioBD || usuarioBD.empty) { //empty=vacío
        Swal.fire({
          title: "¡Oh no!",
          text: "Correo no registrado...",
          icon: "question"
        });

        this.limpiarInputs();
        return;
      }

      //vinculaba el primer documento dela colección "usuarios" que se obtenía desde la BD
      const usuarioDoc = usuarioBD.docs[0]; //creamos constante que almacene la contraseña que se obtendrá

      /*extrae los datos del documento en forma de "objeto" y se especifica que va a ser del tipo 
      "Usuario" (se refiere a la interfaz de nuestros modelos)*/
      const usuarioData = usuarioDoc.data() as Usuario;

      //encripta la contraseña que el usuario envía mediante "Iniciar sesión"
      const hasherPassword = CryptoJS.SHA256(credenciales.password).toString(); //des-encriptar la contraseña obtenida

      /*condicional que compara la contraseña que acabamos de encriptar y  que el usuario envió 
      con la que recibimos del "usuarioData"*/
      if (hasherPassword !== usuarioData.password) {
        Swal.fire({
          title: "¡Oh no!",
          text: "Contraseña incorrecta...",
          icon: "warning"
        });

        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciosesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: "¡Binvenido/a de nuevo!",
            text: "Inicio de sesión exitoso.",
            icon: "success"
          });

          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(err => {
          Swal.fire({
            title: "Algo salió mal...",
            text: "Ocurrió un error al intentar iniciar sesión.",
            icon: "error"
          });

          this.limpiarInputs
        })

    } catch (error) {
      this.limpiarInputs();
    }
  }

  //función para vaciar los inputs del formulario
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
