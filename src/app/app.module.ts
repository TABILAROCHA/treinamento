import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { BuscaComponent } from './busca/busca.component';
import { MenuComponent } from './menu/menu.component';
import { TipoDeEventoComponent } from './tipo-de-evento/tipo-de-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    BuscaComponent,
    MenuComponent,
    TipoDeEventoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
