
import { Routes } from '@angular/router';

import { Inicio } from './paginas/inicio/inicio';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Contacto } from './paginas/contacto/contacto';
import { adminGuard } from './guard/admin.guard';
import { Ofertas } from './paginas/ofertas/ofertas';
import { ProductosComponent } from './paginas/productos/productos';
import { Admin } from './paginas/admin/admin';

export const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },

  { path: 'Inicio', component: Inicio },
  { path: 'Registro', component: Registro },
  { path: 'Carrito', component: Carrito },
  { path: 'Favoritos', component: Favoritos },
  { path: 'Contacto', component: Contacto },
  { path: 'Ofertas', component: Ofertas },
  { path: 'Productos', component: ProductosComponent },

  { path: 'admin', component: Admin, canActivate: [adminGuard] },

  { path: '**', redirectTo: 'Inicio' }
];
