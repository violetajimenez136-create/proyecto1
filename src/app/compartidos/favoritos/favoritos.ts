import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { carritoService } from '../../servicios/carritoService';
import { RouterLink } from '@angular/router';
import { favoritosService } from '../../servicios/favoritosService';
@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  Favoritos: Producto[] = [];
  constructor(private carritoService: carritoService, private favoritosService: favoritosService) { }

  ngOnInit() {
    this.Favoritos = this.favoritosService.obtenerProducto();
  }
  aniadiralcarrito(p: Producto): void {
  alert ("producto agregado al carrito")
  this.carritoService.aniadirProducto(p)
  }

  obtenerProducto(): Producto[] {
    return this.Favoritos;
  }

  eliminarFav(id: number): void {
    this.Favoritos = this.Favoritos.filter(p => p.id !== id);
  }

}
