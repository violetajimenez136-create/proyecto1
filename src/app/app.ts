import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './compartidos/footer/footer';
import { Nav } from './compartidos/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto1');
}
