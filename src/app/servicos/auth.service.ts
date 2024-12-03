import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: { login: string; email: string; senha: string } | null = null;

  constructor() {}

  cadastrar(login: string, email: string, senha: string): void {
    this.user = { login, email, senha };
  }

  validarLogin(login: string, senha: string): boolean {
    return this.user?.login === login && this.user?.senha === senha;
  }

  obterDados(): { login: string; email: string } | null {
    if (this.user) {
      return { login: this.user.login, email: this.user.email };
    }
    return null;
  }
}
