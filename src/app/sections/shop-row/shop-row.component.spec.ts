import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRowComponent } from './shop-row.component';

describe('ShopRowComponent', () => {
  let component: ShopRowComponent;
  let fixture: ComponentFixture<ShopRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopRowComponent]
    });
    fixture = TestBed.createComponent(ShopRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
