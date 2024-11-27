import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontMaker';
  constructor(public router: Router){
  }

  isLoginOrRestrictedPage(): boolean {
    const restrictedRoutes = ['/login', '/cadastro', '/confirmacao'];
    return restrictedRoutes.includes(this.router.url);
  }

}
//export class UsuariosComponent
