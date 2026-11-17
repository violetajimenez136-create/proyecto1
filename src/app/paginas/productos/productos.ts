
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Product } from "../../servicios/product";
import { carritoService } from "../../servicios/carritoService";
import { Favoritos } from "../../servicios/favoritos";
import { Producto } from "../../models/producto";

@Component({
  selector: "app-productos",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./productos.html"
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  buscar = "";

  constructor(
    private productService: Product,
    private carrito: carritoService,
    private favoritoService: Favoritos
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.productService.listar(this.buscar).subscribe({
      next: (lista) => {
        this.productos = lista;
      },
      error: (error) => {
        console.error("Error al cargar productos:", error);
      }
    });
  }

  agregaralcarrito(producto: Producto): void {
    this.carrito.aniadirProducto(producto);
    alert("Producto agregado al carrito");
  }

  agregarFavoritos(producto: Producto): void {
    this.favoritoService.aniadirFav(producto);
    alert("Producto agregado a favoritos");
  }
}
