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
        titulo: "Harry Potter y la piedra filosofal",
        genero: "Novela / Fantasía",
        autor: "J.K Rowling",
        img: "https://cdnx.jumpseller.com/queleola/image/10413614/resize/540/540?1602090638",
        precio: 9000
      },
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
        titulo: "Harry Potter y la piedra filosofal",
        genero: "Novela / Fantasía",
        autor: "J.K Rowling",
        img: "https://cdnx.jumpseller.com/queleola/image/10413614/resize/540/540?1602090638",
        precio: 9000
      },

    ]
  }
}
