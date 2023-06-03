import { AfterViewInit, Component } from '@angular/core';
import { fadeIn } from 'src/app/animations/fade';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[
    fadeIn
  ]
})
export class AboutComponent implements AfterViewInit{

  
  initScrollTrigger(): void {

    let target1 = document.querySelectorAll(".myImgs")[0];

    //Timeline
    let ourStoryImgs = gsap.timeline({
      scrollTrigger: {
        trigger: ".myImgs",
        start: "0% 80%",
        end: "100% 85%",
        scrub: true,
        //markers:true,
        id: "ourStoryImgs",
      }
    });
    ourStoryImgs
      .from(target1.children, { opacity: 0, scale: 0.3, stagger: 0.5 });
     
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }
}
