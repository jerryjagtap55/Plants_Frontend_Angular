import { animate, sequence, state, style, transition, trigger } from '@angular/animations';


let animate_time = 800 ; // duration of animation  


export let fadeIn =  trigger('fadeIn',[
    state('void', style({opacity: 0})),
    transition('void => *', [
        animate(animate_time),
    ])
  ]);

export let fadeInRight =  trigger('fadeInRight',[
    state('void', style({opacity: 0, transform: 'translateX(-2.1rem)' })),
    transition('void => *', [
        animate(animate_time),
    ])
  ]);

  export let fadeInLeft =  trigger('fadeInLeft',[
    state('void', style({opacity: 0, transform: 'translateX(2.1rem)' })),
    transition('void => *', [
        animate(animate_time),
    ])
  ]);
  
  export let fadeInUp =  trigger('fadeInUp',[
    state('void', style({opacity: 0, transform: 'translateY(2.1rem)' })),
    transition('void => *', [
        animate(animate_time),
    ])
  ]);
  
  