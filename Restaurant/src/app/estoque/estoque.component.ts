import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {

  @Output() aoExibirAdd = new EventEmitter<boolean>();

  @Input () produtos: any[] = [];

  exibirAdicionar (): void {

    this.aoExibirAdd.emit(false);

  }

}
