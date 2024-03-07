import { Injectable } from '@angular/core';

import { GeneroLiterario, Livro } from '../componentes/livro/livro';
import { livros } from '../mock-livros'

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  public generos: GeneroLiterario[] = [
    {
      id: 'romance',
      value: 'Romance'
    },
    {
      id: 'misterio',
      value: 'Mistério'
    },
    {
      id: 'fantasia',
      value: 'Fantasia'
    },
    {
      id: 'ficcao-cientifica',
      value: 'Ficção Científica'
    },
    {
      id: 'tecnicos',
      value: 'Técnicos'
    },
  ]

  private livrosPorGenero: Map<string, Livro[]> = new Map();

  constructor() {
    this.generos.forEach(genero => {
      this.livrosPorGenero.set(genero.id, []);
    });

    livros.forEach(livro => {
      if (this.livrosPorGenero.has(livro.genero.id)) {
        this.livrosPorGenero.get(livro.genero.id)?.push(livro);
      } else {
        this.livrosPorGenero.set(livro.genero.id, [livro]);
      }
    });
    
  }

  adicionarLivro(novoLivro: Livro) {
    if (!this.livrosPorGenero.has(novoLivro.genero.id)) {
      throw new Error("Gênero literário desconhecido")
    }
    this.livrosPorGenero.get(novoLivro.genero.id)?.push(novoLivro);
  }

  obterLivrosPorGenero(genero: string): Livro[] {
    return this.livrosPorGenero.get(genero) || [];
  }

}
