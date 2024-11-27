import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro/confirmacao', component: ConfirmacaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
