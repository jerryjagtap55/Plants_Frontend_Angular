import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent {
 
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
}
