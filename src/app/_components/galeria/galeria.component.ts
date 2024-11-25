import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: false,

  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagens = [
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Exemplo 1' },
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Exemplo 2' },
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Exemplo 3' },
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Exemplo 4' }
  ];

}
