import { Produto } from './../models/produto.model';
import { Component, Output, EventEmitter, OnInit} from '@angular/core';
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
  editarClass: String = "botao-pequeno";
  editarIcon: String = "fa fa-pencil fa-3x";
  disabled: String = "disabled";

  @Output() aoExibirAdd = new EventEmitter<boolean>();
  @Output() aoEditarPro = new EventEmitter<boolean>();

  ngOnInit(): void {

    this.service.tudo().subscribe((produtos: Produto[]) => {

      console.table(produtos);
      this.produtos = produtos;

    })

  }

  exibirAdicionar (): void {

    this.aoExibirAdd.emit(false);

  }

  editarProduto(): void {

    this.aoEditarPro.emit(false);

  }

  modoEditar (): void {

    if (this.exibir == true) {

      this.exibir = false;
      this.editarClass = "editar";
      this.editarIcon = "fa fa-times fa-3x";

    } else {

      this.exibir = true;
      this.editarClass = "botao-pequeno";
      this.editarIcon = "fa fa-pencil fa-3x";

    }

  }

}
