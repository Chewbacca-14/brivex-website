import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsCardComponent } from './components/about-us-card/about-us-card.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { WhyUsCardComponent } from './shared/why-us-card/why-us-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    TechnologiesComponent,
    OurServicesComponent,
    WhyUsComponent,
    WhyUsCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'brivex-website';
}
