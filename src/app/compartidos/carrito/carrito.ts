import { Component } from '@angular/core';
import {Producto} from '../../models/producto';
import { OnInit } from '@angular/core';
import { carritoService } from '../../servicios/carritoService';

@Component({
selector: 'app-carrito',
imports: [],
templateUrl: './carrito.html',
styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

productosCarrito: Producto[] = [];
constructor(private carritoS: carritoService) {}
ngOnInit() {
this.productosCarrito =
this.carritoS.obtenerProducto();
}
aumentarCantidad(id: number) {
this.carritoS.aumentarCantidad(id);
}
disminuirCantidad(id: number) {
this.carritoS.disminuirCantidad(id);
}
eliminarProducto(id: number) {
this.carritoS.eliminarProducto(id);
this.productosCarrito =
this.carritoS.obtenerProducto();
}
vaciarCarrito(){
this.productosCarrito = []
}
}

