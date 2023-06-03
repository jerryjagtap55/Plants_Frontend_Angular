import { AfterViewInit, Component } from '@angular/core';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




@Component({
  selector: 'app-shop-row',
  templateUrl: './shop-row.component.html',
  styleUrls: ['./shop-row.component.scss']
})
export class ShopRowComponent implements AfterViewInit {
  plants: any[] = [
    {
      id: 1,
      img: 'flower-1.jpg',
      name: 'Aloe Juvenal plant',
      category: 'Cacti',
      original_price: 400,
      sale_price: 189.99
    },
    {
      id: 2,
      img: 'flower-2.jpeg',
      name: 'Palm plant',
      category: 'Shrub',
      original_price: 800,
      sale_price: 399.99
    },
    {
      id: 3,
      img: 'plant-3.jpg',
      name: 'Money Plant',
      category: 'Herb',
      original_price: 300,
      sale_price: 99.99
    },

  ];

  constructor() {

  }

  ngOnInit() {

  }


  initScrollTrigger(): void {

    let target = document.querySelectorAll("#productShop app-product-card")[0];

    //Timeline
    let tlShop1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#shopSection",
        start: "0% 77%",
        end: "0% 58%",
        scrub: true,
        //markers: true,
        id: "tlShop1",
      }
    });
    tlShop1
      .from(".headingShop h2", { opacity: 0, scale: 0.3 })
      .from(".headingShop h4", { opacity: 0, scale: 0.3 });


    // to animate Images 
    let mm = gsap.matchMedia();
    mm.add("(max-width: 640px)", () => { //for small screen

      let tlShop2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#productShop",
          start: "0% 80%",
          end: "100% 75%",
          scrub: true,
          //markers: true,
          id: "tlShop2",
        }
      });

      


      tlShop2
        .from(target.children, { opacity: 0, stagger: 0.3 });

    });
    mm.add("(min-width: 640px)", () => {
      let tlShop2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#productShop",
          start: "0% 88%",
          end: "100% 69%",
          scrub: true,
          //markers: true,
          id: "tlShop2",
        }
      });

      tlShop2
        .from(target.children, { opacity: 0, scale: 0.3 });
    });


    
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }



}
