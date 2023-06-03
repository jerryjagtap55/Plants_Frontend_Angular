import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn, fadeInUp } from 'src/app/animations/fade';

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations: [
    fadeIn
  ]
})
export class ProductPageComponent implements OnInit, AfterViewInit {

  plants: any[] = [
    {
      id: 1,
      img: 'flower-1.jpg',
      name: 'Aloe Juvenal plant',
      category: 'Cacti',
      original_price: 200,
      sale_price: 149.99
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
      img: 'flower-3.jpeg',
      name: 'Palm plant',
      category: 'Shrub',
      original_price: 800,
      sale_price: 399.99
    },
    {
      id: 4,
      img: 'flower-4.jpeg',
      name: 'Money Plant',
      category: 'Herb',
      original_price: 300,
      sale_price: 99.99
    },

    {
      id: 7,
      img: 'flower-3.jpeg',
      name: 'Aloe Juvenal plant',
      category: 'Cacti',
      original_price: 200,
      sale_price: 149.99
    },
    {
      id: 8,
      img: 'flower-2.jpeg',
      name: 'Aloe plant',
      category: 'Cacti',
      original_price: 300,
      sale_price: 149.99
    },



  ];

  constructor() {

  }

  ngOnInit() {

  }


  initScrollTrigger(): void {

    let target = document.querySelectorAll(".shopCard ")[0];

    let mm = gsap.matchMedia();
    mm.add("(max-width: 640px)", () => { //for small screen

      let tlProduct = gsap.timeline({
        scrollTrigger: {
          trigger: "#shop",
          start: "0% 60%",
          end: "100% 90%",
          scrub: true,
          //markers: true,
          id: "tlProduct",
        }
      });
      tlProduct
        .from(target.children, { opacity: 0, stagger:0.5 })
       

    });
    //Timeline
   
      

  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }


}
