import { AdicionarComponent } from './adicionar/adicionar.component';
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

    console.log($event);
    const produto = {...$event};
    this.produtos.push(produto);

  }

  exibirAdicionar ($event: any): void {

    console.log($event);
    this.exibir = $event;

  }

}
