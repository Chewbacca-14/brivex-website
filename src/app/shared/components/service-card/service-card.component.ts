import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input()srcImage = ''
  @Input()svgSrcImage = ''
  @Input()title = ''
  @Input()description = ''
}
