import { Component } from '@angular/core';
import {LogoCardComponent} from "../../shared/components/logo-card/logo-card.component";
import {StepperComponent} from "../../shared/components/stepper/stepper.component";

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [
    LogoCardComponent,
    StepperComponent
  ],
  templateUrl: './how-we-work.component.html',
  styleUrl: './how-we-work.component.scss'
})
export class HowWeWorkComponent {

}
