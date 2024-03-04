import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo: [''],
      autoria: [''],
      imagem: [''],
      genero: [''],
      dataLeitura: [''],
      classificacao: ['']
    })
  }

  adicionarLivro() {

  }
}
