import { Component } from '@angular/core';
import { fadeIn } from 'src/app/animations/fade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[
    fadeIn
  ]
})
export class AboutComponent {

}
