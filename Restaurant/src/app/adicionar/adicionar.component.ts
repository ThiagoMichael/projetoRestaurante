import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {

  @Input () exibir: boolean = true
  @Output() aoAdicionar = new EventEmitter<object>();
  @Output() aoFinalizar = new EventEmitter<boolean>();

  nome: String = '';
  descricao: String = '';
  genero: String = '';
  quantidade: number = 0;
  validade: String = "";

  adicionar (): void {

    this.aoAdicionar.emit({

      nome: this.nome,
      descricao: this.descricao,
      genero: this.genero,
      quantidade: this.quantidade,
      validade: this.validade

    });

    this.limparCampos();
    this.aoFinalizar.emit(true);

  }

  limparCampos (): void {

    this.nome = '';
    this.descricao = '';
    this.genero = '';
    this.quantidade = 0;
    this.validade = "";

  }

}
