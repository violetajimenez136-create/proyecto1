
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { Product } from "../../servicios/product";
import { carritoService } from "../../servicios/carritoService";
import { Favoritos } from "../../servicios/favoritos";
import { Producto } from "../../models/producto";

@Component({
  selector: "app-productos",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./productos.component.html"
})
export class ProductosComponent implements OnInit {

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

  agregar(idProducto: number): void {
    this.carrito.agregar(idProducto, 1).subscribe({
      next: () => alert("Producto agregado al carrito"),
      error: (error) => console.error("Error al agregar al carrito:", error)
    });
  }
  favorito(idProducto: number): void {
    this.favoritoService.agregar(idProducto).subscribe({
      next: () => alert("Producto agregado a favoritos"),
      error: (error) => console.error("Error al agregar a favoritos:", error)
    });
  }
}
