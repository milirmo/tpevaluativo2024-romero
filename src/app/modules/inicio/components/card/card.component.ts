import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //Llamo a la interfaz Libros (productos)
  public tarjetas: Libro[];

  constructor() {
    this.tarjetas = [
      {
        uid: "",
        titulo: "Harry Potter y la piedra filosofal",
        genero: "Novela / Fantasía",
        autor: "J.K Rowling",
        img: "https://cdnx.jumpseller.com/queleola/image/10413614/resize/540/540?1602090638",
        precio: 9000
      },
      {
        uid: "",
        titulo: "Indias Blancas",
        genero: "Novela / Historia",
        autor: "Florencia Bonelli",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327292662l/13421452.jpg",
        precio: 7000
      },
      {
        uid: "",
        titulo: "Animales Fantásticos y Dónde Encontrarlos",
        genero: "Fantasía / Estudio",
        autor: "J.K Rowling",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1253335238i/2490849.jpg",
        precio: 11000
      },
      {
        uid: "",
        titulo: "La Trilogía de New York",
        genero: "Novela / Suspenso / Policial",
        autor: "Paul Auster",
        img: "https://www.planetadelibros.com/usuaris/libros/fotos/301/original/portada_la-trilogia-de-nueva-york_paul-auster_201907181317.jpg",
        precio: 10000
      },

    ]
  }
}
