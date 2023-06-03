import { AfterViewInit, Component } from '@angular/core';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


@Component({
  selector: 'app-root',
  template: `
  <app-navbar> </app-navbar>
  <router-outlet> </router-outlet>
  <app-footer> </app-footer>
  `
})

export class AppComponent{
  
  title = 'Nish Plants';
  
}
