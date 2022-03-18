import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Restaurant';
  produtos: object[] = [];
  exibir: boolean = true;

  adicionarProduto($event: object): void {

    const produto = {...$event};
    this.produtos.push(produto);

  }

  exibirAdicionar ($event: boolean): void {

    this.exibir = $event;

  }

}
