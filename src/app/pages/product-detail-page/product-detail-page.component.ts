import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {

  @Input() plantId: any[] | undefined;
  
}
