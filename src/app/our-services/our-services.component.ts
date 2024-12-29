import { Component } from '@angular/core';
import {ServiceCardComponent} from "../shared/service-card/service-card.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    ServiceCardComponent
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

}
