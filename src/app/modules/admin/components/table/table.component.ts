import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//importamos paquetería de alertas personalizadas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // ! <- tomar valores vacíos

  modalVisibleProducto: boolean = false;

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    autor: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required)
  })
  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
  async agregarProducto() {
    //resetea el formulario y queda vacío
    this.producto.reset()
    
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        autor: this.producto.value.autor!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        stock: this.producto.value.stock!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {

          Swal.fire({
            title: "¡Producto agregado!",
            text: "El nuevo producto se agregó exitosamente.",
            icon: "success"
          });

          //resetea el formulario y queda vacío
          this.producto.reset()
        })

        .catch(error => {

          Swal.fire({
            title: "¡Oh, no!",
            text: "Ha ocurrido un error al cargar el nuevo producto: /n"+error,
            icon: "error"
          });

          this.producto.reset()
        })
    }
  }

  // función vinculada al modal y el botón de la tabla
  mostrarBorrar(productoSeleccionado: Producto){
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      Swal.fire({
        title: "Producto eliminado.",
        text: "El producto se eliminó correctamente.",
        icon: "success"
      });
    })
    .catch(error => {
      Swal.fire({
        title: "¡Oh, no!",
        text: "Ha ocurrido un error al intentar eliminar el producto: /n"+error,
        icon: "error"
      });
    })
  }

  //EDITAR PRODUCTOS
  mostrarEditar(productoSeleccionado: Producto){

    this.productoSeleccionado = productoSeleccionado;

    //toma valores del producto seleccionado y los autocompleta en el form del modal (menos id)
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      autor: productoSeleccionado.autor,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      stock: productoSeleccionado.stock
    })
  }

  editarProducto(){
    let datos: Producto = {

      //Solo idProducto no se modifica por el usuario (por eso usamos productoSeleccionado)
      idProducto: this.productoSeleccionado.idProducto,
      //Los demás atributos reciben nueva información desde el formulario
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      autor: this.producto.value.autor!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      stock: this.producto.value.stock!
    }

    //Enviamos al método el id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      
      Swal.fire({
        title: "Producto modificado.",
        text: "El producto se modificó exitosamente.",
        icon: "success"
      });

    })

  .catch(error => {
    Swal.fire({
      title: "¡Oh, no!",
      text: "Ocurrió un error al intentar modificar el producto... n/"+error,
      icon: "error"
    });
  })
  }
}