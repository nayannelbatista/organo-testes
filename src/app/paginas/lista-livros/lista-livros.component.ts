import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LivroComponent } from '../../componentes/livro/livro.component';
import { Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, FormularioComponent, CommonModule, RouterLink],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  livros: Livro[] = [];
  livrosPorGenero: { [genero: string]: Livro[] } = {};
  generos: string[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.livros = this.livroService.obterLivros();
    this.livrosPorGenero = this.agruparLivrosPorGenero(this.livros);
    this.generos = Object.keys(this.livrosPorGenero);
  }

  agruparLivrosPorGenero(livros: Livro[]): { [genero: string]: Livro[] } {
    const livrosPorGenero: { [genero: string]: Livro[] } = {};
    for (const livro of livros) {
      if (!livrosPorGenero[livro.genero]) {
        livrosPorGenero[livro.genero] = [];
      }
      livrosPorGenero[livro.genero].push(livro);
    }
    return livrosPorGenero;
  }

  formatarGenero(genero: string): string {
    switch (genero) {
      case 'romance':
        return 'Romance';
      case 'misterio':
        return 'Mistério';
      case 'fantasia':
        return 'Fantasia';
      case 'ficcao-cientifica':
        return 'Ficção Científica';
      case 'tecnicos':
        return 'Técnicos';
      default:
        return genero;
    }
  }
}
