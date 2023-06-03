import { AfterViewInit, Component, Input } from '@angular/core';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent implements AfterViewInit{
 
  plants: any[] = [
    {
      id:1,
      img: 'flower-1.jpg',
      name: 'Aloe Juvenal plant',
      category: 'Cacti',
      original_price: 400,
      sale_price: 189.99
    },

  ];

  constructor() {

  }

  ngOnInit() {

  }

  initScrollTrigger(): void {
    gsap.set(".heading h4, .heading h2 ", {
      opacity: 0,
      scale: 0.3,
    });

    //Timeline
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#special-offer",
        start: "0% 77%",
        end: "0% 58%",
        scrub: true,
        //markers: true,
        id: "tl1",
      }
    });
    tl1
      .to(".heading h2", { opacity: 1, scale: 1 })
      .to(".heading h4", { opacity: 1, scale: 1 });

      // to animate Images 
      let mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () =>{
        let tl2= gsap.timeline({
          scrollTrigger:{
            trigger: "#special-offer-image",
            start:"0% 75%",
            end:"50% 75%",
            scrub: true,
            //markers: true,
            id: "tl2"
          }
      });

      tl2
        .from(".firstImage",{ opacity: 0, xPercent: -100})
        .from(".product-card", { opacity: 0, xPercent: 100})
      }
      );
     
        mm.add("(max-width: 640px)", () =>{
          let tlm= gsap.timeline({
            scrollTrigger:{
              trigger: "#special-offer-image",
              start:"0% 80%",
              end:"100% 70%",
              scrub: true,
              //markers: true,
              id: "tl2-m"
            }
        });
  
        tlm
          .from(".firstImage",{ opacity: 0})
          .from(".product-card", { opacity: 0});
        });


  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }

}
