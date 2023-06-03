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

export class AppComponent implements AfterViewInit{
  

  initScrollTrigger(): void {
    gsap.set(".test ",{
      opacity: 0,
      scale: 0.3,
    });

    //Timeline
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: "#test",
        start: "100% 80%",
        end: "100% 60%",
        scrub: true,
        markers: true,
        id: "test",
      }
    });

    tl
    .to(".test", {opacity:1, scale: 1});

    
  }
  
  ngAfterViewInit() {
   this.initScrollTrigger();
  }
  title = 'Nish Plants';
  
}
