import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public carrito = [
    { nombre: 'Patatas' },
    { nombre: 'Cebolla' },
    { nombre: 'Huevos' }
  ];

  public tienda = [
    { nombre: 'Lechuga' },
    { nombre: 'Pollo' },
    { nombre: 'Tomates' },
    { nombre: 'Pimientos' },
    { nombre: 'Leche' },
    { nombre: 'Chocolate' }
  ];

  drop(event: CdkDragDrop<any[]>) {

    // Comprobamos si estamos moviendo el elemento dentro de la misma lista
    if (event.previousContainer === event.container) {
      // Si es el caso, modificamos el orden del elemento en la lista
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Si no es el caso, eliminamos el artículo de la lista original y lo añadimos en la nueva lista
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  vaciarCarrito() {
    this.tienda = this.tienda.concat(this.carrito.splice(0, this.carrito.length));
  }
}
