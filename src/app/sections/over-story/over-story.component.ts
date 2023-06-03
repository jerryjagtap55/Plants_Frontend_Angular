import { AfterViewInit, Component } from '@angular/core';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


@Component({
  selector: 'app-over-story',
  templateUrl: './over-story.component.html',
  styleUrls: ['./over-story.component.scss']
})
export class OverStoryComponent implements AfterViewInit {


  initScrollTrigger(): void {

    let target = document.querySelectorAll(".headingStory")[0];
    let target2 = document.querySelectorAll("#review")[0];

    //Timeline
    let tlStory1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#storySection",
        start: "0% 77%",
        end: "45% 60%",
        scrub: true,
        //markers: true,
        id: "tlStory1",
      }
    });
    tlStory1
      .from(target.children[1], { opacity: 0, scale: 0.3, })
      .from(target.children[0], { opacity: 0, scale: 0.3, })
      .from(target.children[2], { opacity: 0, scale: 0.3, })
      .from(target.children[3], { opacity: 0.3, });


    let tlStory2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#review",
        start: "0% 80%",
        end: "100% 60%",
        scrub: true,
        //markers: true,
        id: "tlStory2",
      }
    });
    tlStory2
      .from(target2.children, { opacity: 0, scale: 0.3, stagger:0.3 });
      


  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }


}
