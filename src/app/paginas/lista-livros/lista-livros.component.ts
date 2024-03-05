import { Component, OnInit } from '@angular/core';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, FormularioComponent, CommonModule],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{

  livros: Livro[] = [];
  formulario: boolean = true;
  livrosPorGenero: { [genero: string]: Livro[] } = {};
  generos: string[] = [];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livros = this.livroService.obterLivros();
    this.livrosPorGenero = this.agruparLivrosPorGenero(this.livros);
    this.generos = Object.keys(this.livrosPorGenero);
  }

  mostrarOuEsconderFormulario() {
    this.formulario = !this.formulario;
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
}
