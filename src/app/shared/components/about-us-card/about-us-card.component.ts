import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBubbleComponent } from '../contact-bubble/contact-bubble.component';

@Component({
  selector: 'app-about-us-card',
  standalone: true,
  imports: [CommonModule, ContactBubbleComponent],
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss'],
})
export class AboutUsCardComponent {
  @Input() backgroundImage: string = '';
  @Input() avatar: string = '';
  @Input() nameSurname: string = '';
  @Input() position: string = '';

  contacts = [
    {
      icon: '/assets/svg/message-icon.svg',
      bgColor: 'white',
    },
    {
      icon: '/assets/svg/linkedin-icon.svg',
      bgColor: 'white',
    },
    {
      icon: '/assets/svg/email-icon.svg',
      bgColor: 'white',
    },
  ];
}
