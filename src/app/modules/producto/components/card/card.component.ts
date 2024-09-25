import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //definimos colección de productos locales
  coleccionProductos: Producto[] = [];

  //variable local para seleccionar un producto específico
  productoSeleccionado!: Producto;

  //variable local para manejar estado de un modal
  modalVisible: boolean = false;

  //booleana para manejar visibilidad de "ultima compra"
  compraVisible: boolean = false;

  //declaramos las directivas para comunicarse con el componente padre

  //input (directiva para RECIBIR información del componente padre)
  @Input() productoReciente: string = '';
  //output (directiva para ENVIAR información al componente padre)
  @Output() productoAgregado = new EventEmitter<Producto>(); //output será definido como un nuevo evento


  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  //función para mostrar más información de los productos
  mostrarVer(info: Producto){

    //cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;
    
    //guardo en variable seleccionando la info de producto elegido
    this.productoSeleccionado = info;
  }

  //FUNCION AGREGAR PRODUCTO
  agregarProducto(info : Producto){
    
    this.productoAgregado.emit(info);

    //mostrar "ultima compra"
    this.compraVisible = true;
  }

}
