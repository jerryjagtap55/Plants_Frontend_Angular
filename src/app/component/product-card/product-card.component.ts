import { AfterViewInit, Component, Input } from '@angular/core';


// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements AfterViewInit {
  @Input() plants: any[] | undefined;


  initScrollTrigger(): void {

  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }

}
