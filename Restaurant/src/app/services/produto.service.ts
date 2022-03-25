import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private listaProdutos: any[];
  private url = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {

    this.listaProdutos = [];

  }

  get produtos() {

    return this.listaProdutos;

  }

  tudo (): Observable<Produto[]> {

    return this.httpClient.get<Produto[]>(this.url);

  }

  adicionar (produto: any) {

    return this.httpClient.post<Produto[]>(this.url, produto);

  }

  deletar (produto: any) {

    return this.httpClient.delete<Produto[]>(this.url, produto);

  }

}
