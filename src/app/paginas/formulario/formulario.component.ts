import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  formulario!: FormGroup;
  livros: Livro[] = [];
  estrelas = [1, 2, 3, 4, 5];

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo: [''],
      autoria: [''],
      imagem: [''],
      genero: [''],
      dataLeitura: [''],
      classificacao: [null]
    })
  }

  setClassificacao(valor: number) {
    this.formulario.get('classificacao')?.setValue(valor);
  }

  adicionarLivro() {
    const novoLivro = this.formulario.value;
    this.livroService.adicionarLivro(novoLivro);
    this.formulario.reset();
  }
}
