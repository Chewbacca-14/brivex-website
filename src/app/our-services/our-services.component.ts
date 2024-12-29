import { Component } from '@angular/core';
import {ServiceCardComponent} from "../shared/service-card/service-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    ServiceCardComponent,
    CommonModule
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  services: Service[] = [
    {
      title: 'Landing Page',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/landing-service.png',
      svgImgSrc: '/assets/svg/landing.svg'
    },
    {
      title: 'Mobilní aplikace',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/mobile-service.png',
      svgImgSrc: '/assets/svg/mobile.svg'
    },
    {
      title: 'Webové stránky',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/stocks.png',
      svgImgSrc: '/assets/svg/terminal.svg'
    },
    {
      title: 'Webové aplikace',
      description: 'Jsme dva nadšenci do IT a technologií, kteří věří, že inovace mají sílu měnit svět. ',
      imgSrc: '/assets/web-service.png',
      svgImgSrc: '/assets/svg/web.svg'
    }
  ]
}

interface Service {
  title: string;
  description: string;
  imgSrc: string;
  svgImgSrc: string
}
