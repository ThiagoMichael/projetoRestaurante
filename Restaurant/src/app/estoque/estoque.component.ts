import { Produto } from './../models/produto.model';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  constructor (private service: ProdutoService) {}

  produtos: any[] = [];

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

}
