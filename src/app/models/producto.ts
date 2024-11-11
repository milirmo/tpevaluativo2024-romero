export interface Producto {
    idProducto: string;
    nombre: string;
    precio: number;
    autor: string;
    descripcion: string;
    categoria: string;
    imagen: string;
    alt: string;
    stock: number; //para manejar los productos desde la base de datos
}
