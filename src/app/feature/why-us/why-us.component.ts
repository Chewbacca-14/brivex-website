import { Component } from '@angular/core';
import { WhyUsCardComponent } from '../../shared/components/why-us-card/why-us-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [WhyUsCardComponent, CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  whyUsCards = [
    {
      text: 'Inovativní přístup k technologiím',
      image: '/assets/svg/vr-icon.png',
    },
    {
      text: 'Kreativita v každém řešení',
      image: '/assets/svg/lamp-icon.png',
    },
    {
      text: 'Neustálé hledání nových možností',
      image: '/assets/svg/magnifying-glass-icon.png',
    },
    {
      text: 'Odbornost a nadšení pro IT',
      image: '/assets/svg/lock-icon.png',
    },
  ];
}
