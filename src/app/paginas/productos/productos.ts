import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { carritoService } from '../../servicios/carritoService';
import { favoritosService } from '../../servicios/favoritosService';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  constructor(private carritoS : carritoService, private favoritosS: favoritosService){}
  Productos : Producto [] = [
    { 
    id: 1,
    nombre: "moxi",
    descripcion: "bota alta de cuero gamuzón con caña arrugada y cinturón que aporta carácter al diseño. Forrería de fibras animal friendly, taco forrado en el mismo material de la capellada y suelín de goma que garantizan confort y estabilidad. Altura de taco 7,5 cm.",
    precio: 530.000,
    stock: 70,
    disponibilidad: true,
    imagen: "bota moxi.jpg" ,
    cantidad: 1,
    },
    {
    id: 2,
    nombre: "bota rilo",
    descripcion: "Bota RILO de gamuzón color hielo con caña volcada y flecos estilo texano auténtico. Horma en punta y forrería de fibras animal friendly para mayor comodidad y sostenibilidad. Taco de 5,5 cm, caña de 27 cm y circunferencia de 36 cm (talle 36).",
    precio: 575.000,
    stock: 50,
    disponibilidad: true,
    imagen: "bota rilo.png",
    cantidad: 1,
  },
   {
    id: 3,
    nombre: "botineta lion",
    descripcion: "Botineta Lion negro. Modelo animal friendly con caña volcada, cinto decorativo, hebilla y logo. Presenta forrería animal friendly, taco foliado y suelín de goma. Altura de taco de 6,5 cm y caña de 20 cm. La circunferencia de caña en talle 36 es de 30 cm (puede variar según talle). Ofrece comodidad y apoyo seguro.",
    precio: 252.000,
    stock: 60,
    disponibilidad: true,
    imagen: "botineta lion.png",
    cantidad: 1,
  },
   {
    id: 4,
    nombre: "botineta brad",
    descripcion: "Botineta Brad negro. Modelo confeccionado en cuero con caña volcada y aplicación de logo con tachas. Presenta cierre decorativo en el lateral externo, forrería de fibras animal friendly y base inyectada que aporta resistencia. Altura de taco de 6,5 cm, plataforma de 2 cm y Altura de caña de 18 cm. Su diseño ofrece un calce firme y confortable.",
    precio: 399.000,
    stock: 40,
    disponibilidad: true,
    imagen: "botineta brad.png",
    cantidad: 1,
  },
   {
    id: 5,
    nombre: "botineta caise",
    descripcion: "Botineta Caise negro. Modelo en microfibra con apliques full hotfix y caña volcada. Cuenta con forrería animal friendly, taco foliado y suelín a tono. Altura de taco de 5,5 cm y caña de 14 cm. La circunferencia de caña en talle 36 es de 30 cm (puede variar según talle). Aporta estabilidad y confort.",
    precio: 199.000,
    stock: 70,
    disponibilidad: true,
    imagen: "botineta caise.png",
    cantidad: 1,
  },
   {
    id: 6,
    nombre: "botineta sucu",
    descripcion: "Botineta Sucu negro. Modelo en material animal friendly con detalle de estribo, tachas, hebilla y pasador Sarkany. Presenta forrería animal friendly y base inyectada negra. Altura de taco de 5 cm, plataforma de 3 cm y caña de 15 cm. La circunferencia de caña en talle 36 es de 26 cm (puede variar según talle). Ofrece comodidad y apoyo seguro.",
    precio: 199.000,
    stock: 90,
    disponibilidad: true,
    imagen: "botineta sucu.png",
    cantidad: 1,
  },
   {
    id: 7,
    nombre: "bota hexa",
    descripcion: "Bota Hexa verde. Botineta de cuero con fuelle textil escocés bordado y cinturones que realzan el diseño. Forrería de fibras animal friendly y base inyectada que aporta amortiguación y soporte. Altura de taco 4 cm, plataforma de 2 cm y caña de 21 cm. Circunferencia de caña en talle 36 de 36 cm (la medida varía según talle), ideal para un calce cómodo y práctico.",
    precio: 399.500,
    stock: 100,
    disponibilidad: true,
    imagen: "bota hexa.png",
    cantidad: 1,
  },
   {
    id: 8,
    nombre: "rox",
    descripcion: "Botineta Rox negro. Modelo confeccionado en cuero con cierre que favorece un ajuste práctico. Presenta forrería de fibras animal friendly y taco inyectado que brinda mayor resistencia. Altura de taco de 6 cm y caña de 18 cm. La circunferencia de caña en talle 36 es de 27 cm (la medida varía según talle). Su construcción proporciona estabilidad y confort en el uso diario.",
    precio: 429.000,
    stock: 100,
    disponibilidad: true,
    imagen: "botineta rox.png",
    cantidad: 1,
  },
   {
    id: 9,
    nombre: "bota levin",
    descripcion: "Bota Levin off white de cuero con caña volcada. Horma en punta estilo texana. Forrería de fibras animal friendly. Altura de taco 5,5cm . Altura de caña 27cm. La circunferencia de la caña en un talle 36 es de 36cm, la medida varía según el talle.",
    precio: 434.700,
    stock: 200,
    disponibilidad: true,
    imagen: "bota levin.png",
    cantidad: 1,
  },
  ];
  agregaralcarrito(p: Producto){
    this.carritoS.aniadirProducto(p);
    alert ("el producto se agrego al carrito")
  }
  agregarFavoritos(p: Producto){
    this.favoritosS.aniadirFav(p);
    alert ("el producto se agrego a favoritos")
  }
}
