import { Component } from '@angular/core';
import { CardImgComponent } from '../../shared/components/card-img/card-img.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CardImgComponent, CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  technologies = [
    {
      name: 'Flutter',
      iconSrc: '/assets/svg/flutter.svg',
      iconAlt: 'Flutter logo',
    },
    {
      name: 'Dart',
      iconSrc: '/assets/svg/dart.svg',
      iconAlt: 'Dart logo',
    },
    {
      name: 'Angular',
      iconSrc: '/assets/svg/angular.svg',
      iconAlt: 'Angular logo',
    },
    {
      name: 'Javascript',
      iconSrc: '/assets/svg/javascript.svg',
      iconAlt: 'Javascript logo',
    },
    {
      name: 'Kotlin',
      iconSrc: '/assets/svg/kotlin.svg',
      iconAlt: 'Kotlin logo',
    },
    {
      name: 'Java',
      iconSrc: '/assets/svg/java.svg',
      iconAlt: 'Java logo',
    },
    {
      name: 'SpringBoot',
      iconSrc: '/assets/svg/spring-boot.svg',
      iconAlt: 'SpringBoot logo',
    },
    {
      name: 'AppWrite',
      iconSrc: '/assets/svg/appwrite.svg',
      iconAlt: 'AppWrite logo',
    },
    {
      name: 'Firebase',
      iconSrc: '/assets/svg/firebase.svg',
      iconAlt: 'Firebase logo',
    },
    {
      name: 'Figma',
      iconSrc: '/assets/svg/figma.svg',
      iconAlt: 'Figma logo',
    },
  ];
}
