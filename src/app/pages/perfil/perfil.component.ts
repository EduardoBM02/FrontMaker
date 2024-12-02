import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil',
  standalone: false,
  
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  user: { nome: string; email: string; dataNascimento: string } | null = null;

  constructor() {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
   
    this.user = {
      nome: 'João Carlos',
      email: 'JoãoCarlos@gmail.com',
      dataNascimento: '15-06-1992' 
    };
  }
}
