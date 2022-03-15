import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { NavComponent } from './nav/nav.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstoqueComponent,
    NavComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
