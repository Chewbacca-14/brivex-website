import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us-card.component.html',
  styleUrl: './why-us-card.component.scss',
})
export class WhyUsCardComponent {
  @Input() text: string = '';
  @Input() image: string = '';
}
