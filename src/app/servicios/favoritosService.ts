import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root',
})
export class favoritosService {
  favoritos: Producto[] = [];

  aniadirFav(p: Producto): void {
    this.favoritos.push(p);
  }

  obtenerProducto(): Producto[] {
    return this.favoritos;
  }

  eliminarFav(id: number): void {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }

}
