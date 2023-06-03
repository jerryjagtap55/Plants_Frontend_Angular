import { AfterViewInit, Component } from '@angular/core';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


@Component({
  selector: 'app-gift-sec',
  templateUrl: './gift-sec.component.html',
  styleUrls: ['./gift-sec.component.scss']
})
export class GiftSecComponent implements AfterViewInit {


  initScrollTrigger(): void {

    let target1 = document.querySelectorAll(".giftText")[0];

    //Timeline
    let mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => { //for small screen

      let tlGift = gsap.timeline({
        scrollTrigger: {
          trigger: "#giftSection",
          start: "0% 80%",
          end: "100% 85%",
          scrub: true,
          //markers: true,
          id: "tlGift",
        }
      });
      tlGift
        .from(target1.children, { opacity: 0, scale: 0.3, stagger: 0.5 })
        .from(".giftImg",{opacity:0})

    });

    mm.add("(min-width: 640px)", () => { //for Big screen

      let tlGift = gsap.timeline({
        scrollTrigger: {
          trigger: "#giftSection",
          start: "0% 80%",
          end: "100% 85%",
          scrub: true,
          //markers: true,
          id: "tlGift",
        }
      });
      tlGift
        .from(target1.children, { opacity: 0, xPercent:-100, stagger: 0.5 })
        .from(".giftImg",{opacity:0, xPercent:100});

    });


  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }

}
