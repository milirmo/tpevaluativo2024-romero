import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import { CarritoService } from 'src/app/modules/carrito/service/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Definimos colección de productos locales
  coleccionProductos: Producto[] = [];

  // Variable local para seleccionar un producto específico
  productoSeleccionado!: Producto;

  // Variable local para manejar estado de un modal
  modalVisible: boolean = false;

  stock: number = 0;

  constructor(
    public servicioCrud: CrudService,
    public servicioCarrito: CarritoService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(productos => {
      this.coleccionProductos = productos.filter(producto => producto.oferta === 'false');
    });

    //inicia carrito apenas se ingresa a productos
    this.servicioCarrito.iniciarCarrito();
  }

  // Función para mostrar más información de los productos
  mostrarVer(info: Producto){
    // Cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;

    // Guardo en variable seleccionado la información de producto elegido
    this.productoSeleccionado = info;
  }

  agregarProducto(info : Producto){

    const stockDeseado = Math.trunc(this.stock);

    if (stockDeseado <= 0 || stockDeseado > info.stock) {

      Swal.fire({
        title:"Error al agregar el producto",
        text:"Stock insuficiente",
        icon:"error"
      })

    } else {
      this.servicioCarrito.crearPedido(info, stockDeseado);

      Swal.fire({
        title:"¡Excelente!",
        text:"Producto añadido al carrito.",
        icon:"success"
      })
    }
  }

}