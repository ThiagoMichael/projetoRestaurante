import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {

  constructor() {}

  @Input() exibir: boolean = true;

  nome: String = '';
  descricao: String = '';
  genero: String = '';
  quantidade: number = 0;
  validade: String = "";

}
