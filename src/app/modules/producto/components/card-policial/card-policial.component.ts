import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import { CarritoService } from 'src/app/modules/carrito/service/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-policial',
  templateUrl: './card-policial.component.html',
  styleUrls: ['./card-policial.component.css']
})
export class CardPolicialComponent {
  // Colección de todos los productos de forma local
  coleccionProductos: Producto[] = [];

  // Colección de productos de una sola categoría
  coleccionPoliciales: Producto[] = [];

  // Variable para seleccionar productos específicos
  productoSeleccionado!: Producto;

  // Variable para manejar estado del modal
  modalVisible: boolean = false;

  stock: number = 0
  

  // Patentamos de forma local el servicio para acceder en él
  constructor(
    public servicioCrud: CrudService,
    public servicioCarrito: CarritoService
  ){}

  // Inicializa al momento que renderiza el componente
  ngOnInit(): void{
    // Accedemos a método 'obtenerProducto' y nos subscribimos a los cambios
    // recibimos notificación ante modificaciones
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      // Mostrará la colección de esa categoría hasta el momento
      this.mostrarProductoPolicial();
    })

    //inicia carrito apenas se ingresa a productos
    this.servicioCarrito.iniciarCarrito();
  }

  // Función para filtrar los productos de tipo "alimentación"
  mostrarProductoPolicial(){
    // Iteramos colección de productos con un 'forEach'
    this.coleccionProductos.forEach(producto => {
      // Si es de tipo "alimentación" -> condicional
      if(producto.categoria === "policial"){
        // Lo sube/ guarda en la colección de productos de tipo "alimentación"
        this.coleccionPoliciales.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }


//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
agregarProducto(info: Producto) {
  const stockDeseado = Math.trunc(this.stock);

  if (stockDeseado <= 0 || stockDeseado > info.stock) {
    Swal.fire({
      title: "Error al agregar el producto",
      text: "Stock insuficiente",
      icon: "error"
    })
  } else {
    this.servicioCarrito.crearPedido(info, stockDeseado);
    Swal.fire({
      title: "¡Excelente!",
      text: "Producto añadido al carrito.",
      icon: "success"
    })
  }
}
}