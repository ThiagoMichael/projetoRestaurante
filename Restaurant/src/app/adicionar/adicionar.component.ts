import { ProdutoService } from './../services/produto.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {

  constructor (private service: ProdutoService) {}

  @Input () exibir: boolean = true
  @Output() aoFinalizar = new EventEmitter<boolean>();

  nome: String = '';
  descricao: String = '';
  genero: String = '';
  quantidade: number = 0;
  validade: String = "";

  adicionar () {

    const objetoEmitir = {

      nome: this.nome,
      descricao: this.descricao,
      genero: this.genero,
      quantidade: this.quantidade,
      validade: this.validade

    }

    this.service.adicionar(objetoEmitir).subscribe(resultado => {

      console.log(resultado);
      this.limparCampos();
      this.aoFinalizar.emit(true);

    }, error => {console.error(error);}
    );

    window.location.reload();

  }

  limparCampos (): void {

    this.nome = '';
    this.descricao = '';
    this.genero = '';
    this.quantidade = 0;
    this.validade = "";

  }

}
