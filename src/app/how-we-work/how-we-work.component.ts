import { Component } from '@angular/core';
import {LogoCardComponent} from "../shared/logo-card/logo-card.component";

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [
    LogoCardComponent
  ],
  templateUrl: './how-we-work.component.html',
  styleUrl: './how-we-work.component.scss'
})
export class HowWeWorkComponent {

}
