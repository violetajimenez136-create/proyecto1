import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { carritoService } from '../../servicios/carritoService';
@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  Favoritos: Producto[] = [];
  constructor(private favoritos: carritoService) { }
  ngOnInit() {
    this.Favoritos = this.favoritos.obtenerProducto();
  }
  añadirFav(p: Producto): void {
    this.Favoritos.push(p);
  }

  obtenerProducto(): Producto[] {
    return this.Favoritos;
  }

  eliminarFav(id: number): void {
    this.Favoritos = this.Favoritos.filter(p => p.id !== id);
  }

}
