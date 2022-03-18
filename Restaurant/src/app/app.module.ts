import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { NavComponent } from './nav/nav.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { BlurComponent } from './blur/blur.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstoqueComponent,
    NavComponent,
    AdicionarComponent,
    AlterarComponent,
    BlurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
