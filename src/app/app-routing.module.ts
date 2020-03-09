import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { BuscaSinistroComponent } from './busca-sinistro/busca-sinistro.component';

import { TipoDeEventoComponent } from './tipo-de-evento/tipo-de-evento.component';
import { DadosDoClienteComponent } from './dados-do-cliente/dados-do-cliente.component';
import { MenuPaginaDoisComponent } from './menu-pagina-dois/menu-pagina-dois.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { BuscaComponent } from './busca/busca.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: BuscaSinistroComponent }, // colocar o componente busca sinistro - trocar MenuComponent
  { path: 'acompanhamento', component: AcompanhamentoComponent } // colocar um novo comp. sinistro
// html <a routerLink="/acompanhamento" routerLinkActive="active">Crisis Center</a>
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
