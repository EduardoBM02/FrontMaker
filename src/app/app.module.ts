import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { GaleriaComponent } from './_components/galeria/galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { BlogComponent } from './_components/galeria/exemplos/blog/blog.component';
import { LojaComponent } from './_components/galeria/exemplos/loja/loja.component';
import { PortifolioComponent } from './_components/galeria/exemplos/portifolio/portifolio.component';
import { ReceitasComponent } from './_components/galeria/exemplos/receitas/receitas.component';
import { CommonModule } from '@angular/common'; // Importe o módulo necessário


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GaleriaComponent,
    BaseUiComponent,
    BlogComponent,
    LojaComponent,
    PortifolioComponent,
    ReceitasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
