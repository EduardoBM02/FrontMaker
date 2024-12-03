import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule],
})
export class LoginComponent {
  login = '';
  senha = '';
  erro = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.validarLogin(this.login, this.senha)) {
      this.router.navigate(['/home']);
    } else {
      this.erro = true;
    }
  }
}
