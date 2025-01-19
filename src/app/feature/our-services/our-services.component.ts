import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  services: Service[] = [
    {
      title: 'Landing Page',
      description:
        'Navrhujeme moderní a přesvědčivé landing page, které efektivně přetvářejí návštěvníky na vaše zákazníky. Na míru upravený design, texty a responzivita zajistí optimální uživatelský zážitek.',
      imgSrc: '/assets/our-services/landing-page.png',
    },
    {
      title: 'Mobilní a Web Aplikace',
      description:
        'Vytváříme cross-platformní mobilní a webové aplikace, které poskytují bezproblémovou funkčnost na všech zařízeních. Design, funkčnost a přizpůsobení jsou vždy na míru vašim potřebám.',
      imgSrc: '/assets/our-services/mobile-apps.png',
    },
    {
      title: 'Webové stránky',
      description:
        'Klademe důraz na vytvoření moderních webových stránek a e-shopů, které zaujmou návštěvníky a usnadní nákupní proces. Naše řešení vždy zahrnují individuální přístup k designu, funkcionalitě a přizpůsobení.',
      imgSrc: '/assets/our-services/web-apps.png',
    },
    {
      title: 'UI/UX Design',
      description:
        'Navrhujeme intuitivní UI/UX design, který nejen zajišťuje vynikající uživatelský zážitek, ale také zvyšuje efektivitu vašich aplikací a webů. Vždy se zaměřujeme na přizpůsobení specifickým potřebám vašich uživatelů.',
      imgSrc: '/assets/our-services/webs.png',
    },
  ];
}

interface Service {
  title: string;
  description: string;
  imgSrc: string;
}
