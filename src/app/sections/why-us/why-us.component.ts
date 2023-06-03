import { AfterViewInit, Component } from '@angular/core';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})

export class WhyUsComponent implements AfterViewInit{


  initScrollTrigger(): void {

    let target1 = document.querySelectorAll(".whyUs")[0];

    //Timeline
    let tlWhyUs = gsap.timeline({
      scrollTrigger: {
        trigger: "#whyUsSection",
        start: "0% 80%",
        end: "100% 85%",
        scrub: true,
        id: "tlWhyUs",
      }
    });
    tlWhyUs
      .from(target1.children, { opacity: 0, scale: 0.3, stagger: 0.5 })
     

  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }


}
