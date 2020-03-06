
import { TipoDeEventoComponent } from './tipo-de-evento/tipo-de-evento.component';
import { DadosDoClienteComponent } from './dados-do-cliente/dados-do-cliente.component';
import { MenuPaginaDoisComponent } from './menu-pagina-dois/menu-pagina-dois.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { BuscaComponent } from './busca/busca.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'menu ', component: MenuComponent },
  {path: 'busca', component: BuscaComponent },
  {path: 'pesquisa', component: PesquisaComponent },
  {path: 'menupaginadois', component: MenuPaginaDoisComponent },
  {path: 'dadosdocliente', component: DadosDoClienteComponent },
  {path: 'tipodeevento', component: TipoDeEventoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
