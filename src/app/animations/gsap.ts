import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



export let gsapScrollFadeInTl1 = gsap.timeline(); 

gsap.to("#scroll", {
    scrollTrigger:{
        trigger: "",
        scrub: true,
        markers: true,
    }
})