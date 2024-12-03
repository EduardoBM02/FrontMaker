import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  login = '';
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  cadastrar(): void {
    this.authService.cadastrar(this.login, this.email, this.senha);
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }
}
