import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { NavComponent } from './nav/nav.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstoqueComponent,
    NavComponent,
    AdicionarComponent,
    AlterarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
