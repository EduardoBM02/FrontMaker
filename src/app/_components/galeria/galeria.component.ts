import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: false,

  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  link = [
    { url: 'Blog.png', titulo: 'Blog', a: '/blog' },
    { url: 'Loja.png', titulo: 'Loja', a: '/loja' },
    { url: 'Portifólio.png', titulo: 'Portifólio', a: '/portifolio' },
    { url: 'Receitas.png', titulo: 'Receitas', a: '/receitas' }
  ];

}
