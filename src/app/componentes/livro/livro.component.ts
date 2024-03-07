import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() livro!: Livro;
}
