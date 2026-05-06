import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  Productos : Producto [] = [
    { 
    id: 1,
    nombre: "moxi",
    descripcion: "bota alta de cuero gamuzón con caña arrugada y cinturón que aporta carácter al diseño. Forrería de fibras animal friendly, taco forrado en el mismo material de la capellada y suelín de goma que garantizan confort y estabilidad. Altura de taco 7,5 cm.",
    precio: 530.000,
    stock: 70,
    disponibilidad: true,
    imagen: "bota moxi.jpg" ,
    },
    {
    id: 2,
    nombre: "bota rilo",
    descripcion: "Bota RILO de gamuzón color hielo con caña volcada y flecos estilo texano auténtico. Horma en punta y forrería de fibras animal friendly para mayor comodidad y sostenibilidad. Taco de 5,5 cm, caña de 27 cm y circunferencia de 36 cm (talle 36).",
    precio: 575.000,
    stock: 50,
    disponibilidad: true,
    imagen: "bota rilo.png",
  },
   {
    id: 3,
    nombre: "botineta lion",
    descripcion: "Botineta Lion negro. Modelo animal friendly con caña volcada, cinto decorativo, hebilla y logo. Presenta forrería animal friendly, taco foliado y suelín de goma. Altura de taco de 6,5 cm y caña de 20 cm. La circunferencia de caña en talle 36 es de 30 cm (puede variar según talle). Ofrece comodidad y apoyo seguro.",
    precio: 252.000,
    stock: 60,
    disponibilidad: true,
    imagen: "botineta lion.png",
  },
   {
    id: 4,
    nombre: "botineta brad",
    descripcion: "Botineta Brad negro. Modelo confeccionado en cuero con caña volcada y aplicación de logo con tachas. Presenta cierre decorativo en el lateral externo, forrería de fibras animal friendly y base inyectada que aporta resistencia. Altura de taco de 6,5 cm, plataforma de 2 cm y Altura de caña de 18 cm. Su diseño ofrece un calce firme y confortable.",
    precio: 399.000,
    stock: 40,
    disponibilidad: true,
    imagen: "botineta brad.png",
  },
   {
    id: 5,
    nombre: "botineta caise",
    descripcion: "Botineta Caise negro. Modelo en microfibra con apliques full hotfix y caña volcada. Cuenta con forrería animal friendly, taco foliado y suelín a tono. Altura de taco de 5,5 cm y caña de 14 cm. La circunferencia de caña en talle 36 es de 30 cm (puede variar según talle). Aporta estabilidad y confort.",
    precio: 199.000,
    stock: 70,
    disponibilidad: true,
    imagen: "botineta caise.png",
  },
   {
    id: 6,
    nombre: "botineta sucu.png",
    descripcion: "Botineta Sucu negro. Modelo en material animal friendly con detalle de estribo, tachas, hebilla y pasador Sarkany. Presenta forrería animal friendly y base inyectada negra. Altura de taco de 5 cm, plataforma de 3 cm y caña de 15 cm. La circunferencia de caña en talle 36 es de 26 cm (puede variar según talle). Ofrece comodidad y apoyo seguro.",
    precio: 199.000,
    stock: 90,
    disponibilidad: true,
    imagen: "botineta sucu.png",
  },
  ]
}
