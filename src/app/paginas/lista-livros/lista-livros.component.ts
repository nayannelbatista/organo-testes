import { Component, OnInit } from '@angular/core';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, FormularioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{

  livros: Livro[] = [];
  formulario: boolean = true;

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.livros = this.livroService.obterLivros();
  }

  mostrarOuEsconderFormulario() {
    this.formulario = !this.formulario
  }
}
