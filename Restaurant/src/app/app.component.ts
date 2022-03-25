import { Component } from '@angular/core';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Restaurant';
  exibirAdd: boolean = true;
  exibirEdi: boolean = true;

  // Injeção de serviço no componente
  constructor (private service: ProdutoService) {}

  exibirAdicionar ($event: boolean): void {

    this.exibirAdd = $event;

  }

  exibirEditar ($event: boolean): void {

    this.exibirEdi = $event;

  }

}
