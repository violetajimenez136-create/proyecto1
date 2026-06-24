import { Component } from '@angular/core';
import { favoritosService } from '../../servicios/favoritosService';
import { carritoService } from '../../servicios/carritoService';
import { Oferta } from '../../models/ofertas';


@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  constructor(private favoritosservice: favoritosService, private carritoservice: carritoService) {}
    Ofertas: Oferta[] = [
      {
        id: 10,
        nombre: "botineta jinx",
        descripcion: "Botineta Jinx negro. Modelo confeccionado en cuero gamuzón con apliques decorativos. Cuenta con forrería de fibras animal friendly y taco inyectado que favorece la estabilidad. Altura de taco de 6 cm y caña de 21 cm. La circunferencia de caña en talle 36 es de 40 cm (puede variar según talle). Brinda un apoyo seguro y confortable.",
        precio: 495000,
        stock: 200,
        disponibilidad: true,
        imagen: "botineta jinx.png",
        cantidad: 1,
      },
      {
        id: 11,
        nombre: "bota dylon",
        descripcion: "Bota texana Dylon negra de cuero, de calce directo y caña alta con bordados texanos que destacan su estilo. Presenta detalle de flecos en el talón y precilla con logo RS. Cuenta con forrería de cuero que brinda mayor confort. Altura de caña de 43 cm y circunferencia de 46 cm en talle 36 (puede variar según talle). Fondo texano con una altura de 5,5 cm, ideal para un look auténtico y versátil.",
        precio: 325000,
        stock: 250,
        disponibilidad: true,
        imagen: "bota dylon.png",
        cantidad: 1,
      }, {
        id: 12,
        nombre: "bota daws",
        descripcion: "Bota Daws chocolate. Modelo a la rodilla arrugada en fibras animal friendly. Forrería en fibras animal friendly y taco geométrico forrado en el mismo material de capellada. Altura de taco 5,5 cm. Altura de caña 40 cm. Circunferencia de caña en talle 36: 40 cm (la medida varía según talle).",
        precio: 198000,
        stock: 300,
        disponibilidad: true,
        imagen: "bota daws.png",
        cantidad: 1,
      },
      {
        id: 13,
        nombre: "bota ausa",
        descripcion: "Bota texana Ausa marrón de cuero, con diseño clásico y detalles de flecos y tachas que aportan carácter. Cuenta con forrería de fibras animal friendly que brinda mayor confort. Presenta taco foliado a tono de 5 cm de altura. Altura de caña de 34 cm y circunferencia de 34 cm en talle 36 (puede variar según talle). Ideal para sumar un estilo texano auténtico.",
        precio: 495000,
        stock: 100,
        disponibilidad: true,
        imagen: "bota ausa.png",
        cantidad: 1,
      },
    ]
  agregaralcarrito(p: Oferta){
    this.carritoservice.aniadirProducto(p);
    alert ("el producto se agrego al carrito")
  }
  agregarFavoritos(p: Oferta){
    this.favoritosservice.aniadirFav(p);
    alert ("el producto se agrego a favoritos")
  }
  }
