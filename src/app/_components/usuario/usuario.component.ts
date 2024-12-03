import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  dados: { login: string; email: string } | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.dados = this.authService.obterDados();
  }
}
