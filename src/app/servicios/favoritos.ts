import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root',
})
export class Favoritos {
  Favoritos: Producto[] = [];

  aniadirFav(p: Producto): void {
    this.Favoritos.push(p);
  }

  obtenerProducto(): Producto[] {
    return this.Favoritos;
  }

  eliminarFav(id: number): void {
    this.Favoritos = this.Favoritos.filter(p => p.id !== id);
  }

}
