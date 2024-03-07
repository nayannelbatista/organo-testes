import { Injectable } from '@angular/core';

import { Livro } from '../componentes/livro/livro';
import { livros } from '../mock-livros'

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  adicionarLivro(novoLivro: Livro) {
    livros.push(novoLivro);
  }

  obterLivros(): Livro[] {
    return livros;
  }
}
