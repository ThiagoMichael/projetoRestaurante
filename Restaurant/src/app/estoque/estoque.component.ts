import { Produto } from './../models/produto.model';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  // Injeção de serviço no componente
  constructor (private service: ProdutoService) {}

  produtos: any[] = [];
  exibir: boolean = true;

  ngOnInit(): void {

    this.service.tudo().subscribe((produtos: Produto[]) => {

      console.table(produtos);
      this.produtos = produtos;

    })

  }

  @Output() aoExibirAdd = new EventEmitter<boolean>();

  exibirAdicionar (): void {

    this.aoExibirAdd.emit(false);

  }

  modoEditar (): void {

    if (this.exibir == true) {

      this.exibir = false;

    } else {

      this.exibir = true;

    }

  }

}
