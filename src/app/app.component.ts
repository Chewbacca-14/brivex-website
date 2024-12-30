import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AboutUsComponent } from './feature/about-us/about-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsCardComponent } from './shared/components/about-us-card/about-us-card.component';
import { TechnologiesComponent } from './feature/technologies/technologies.component';
import { OurServicesComponent } from './feature/our-services/our-services.component';
import { WhyUsComponent } from './feature/why-us/why-us.component';
import { WhyUsCardComponent } from './shared/components/why-us-card/why-us-card.component';
import {HowWeWorkComponent} from "./feature/how-we-work/how-we-work.component";
import {ContactsComponent} from "./feature/contacts/contacts.component";

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
    HowWeWorkComponent,
    ContactsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'brivex-website';
}
