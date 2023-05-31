import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from 'src/app/component/product-card/product-card.component';
import { ProductDetailPageComponent } from '../product-detail-page/product-detail-page.component';
import { SpecialOffersComponent } from 'src/app/sections/special-offers/special-offers.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  plants: any[] = [
    {
      id:1,
      img: 'flower-1.jpg',
      name: 'Aloe Juvenal plant',
      category: 'Cacti',
      original_price: 200,
      sale_price: 149.99
    },
    {
      id:2,
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
      id:7,
      img: 'flower-3.jpeg',
      name: 'Aloe Juvenal plant',
      category: 'Cacti',
      original_price: 200,
      sale_price: 149.99
    },
    {
      id:8,
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

}
