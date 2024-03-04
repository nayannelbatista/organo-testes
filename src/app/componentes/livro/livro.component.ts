import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() titulo: string = '';
  @Input() autoria: string = '';
  @Input() classificacao: number = 0;
  @Input() genero: string = '';
  @Input() dataLeitura: string = ''
  @Input() imagem: string = '';
}
