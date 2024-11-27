import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { GaleriaComponent } from './_components/galeria/galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { UsuarioComponent } from './_components/usuario/usuario.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GaleriaComponent,
    PerfilComponent,
    UsuarioComponent,
    BaseUiComponent,
    LoginComponent,
    CadastroComponent,
    ConfirmacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
