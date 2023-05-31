import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-row',
  templateUrl: './shop-row.component.html',
  styleUrls: ['./shop-row.component.scss']
})
export class ShopRowComponent {
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
}
