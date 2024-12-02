import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Importa o serviço ApiService

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  user: { nome: string; email: string; } | null = null;

  constructor(private apiService: ApiService) {} // Injeta o ApiService

  ngOnInit(): void {
    this.getUserProfile();
  }

  // Método para obter o perfil do usuário via API
  getUserProfile(): void {
    // Chama o método getUsers do ApiService
    this.apiService.getUsers().subscribe(
      (users) => {
        if (users.length > 0) {
          this.user = users[2]; // Exemplo de pegar o primeiro usuário
        }
      },
      (error) => {
        console.error('Erro ao obter dados do usuário', error); // Tratamento de erro
      }
    );
  }
}
