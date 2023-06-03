import { Component } from '@angular/core';
import { fadeInLeft, fadeInRight } from 'src/app/animations/fade';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
   fadeInRight,
   fadeInLeft
  ]

})
export class HeroComponent {

}
