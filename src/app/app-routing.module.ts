import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './_components/galeria/exemplos/receitas/receitas.component';
import { BlogComponent } from './_components/galeria/exemplos/blog/blog.component';
import { LojaComponent } from './_components/galeria/exemplos/loja/loja.component';
import { PortifolioComponent } from './_components/galeria/exemplos/portifolio/portifolio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'loja', component: LojaComponent},
  {path: 'portifolio', component: PortifolioComponent},
  {path: 'receitas', component: ReceitasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
