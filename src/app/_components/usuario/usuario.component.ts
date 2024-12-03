import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  standalone: false
})
export class UsuarioComponent implements OnInit {
  user: { nome: string, email: string } | null = null;
  dados: { login: string; email: string } | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.dados = this.authService.obterDados();
  }
}
