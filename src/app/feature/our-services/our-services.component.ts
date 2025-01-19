import { Component } from '@angular/core';
import {ServiceCardComponent} from "../../shared/components/service-card/service-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    ServiceCardComponent, CommonModule
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  services: Service[] = [
    {
      title: 'Landing Page',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/our-services/co-work.png',
      svgImgSrc: '/assets/our-services/tablet-icon.png'
    },
    {
      title: 'Mobilní aplikace',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/our-services/mobile-stats.png',
      svgImgSrc: '/assets/our-services/mobile-icon.png'
    },
    {
      title: 'Webové stránky',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/our-services/analytics.png',
      svgImgSrc: '/assets/our-services/computer-icon.png'
    },
    {
      title: 'Webové aplikace',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/our-services/coffee-program.png',
      svgImgSrc: '/assets/our-services/terminal-icon.png'
    }
  ]
}

interface Service {
  title: string;
  description: string;
  imgSrc: string;
  svgImgSrc: string
}
