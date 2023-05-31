import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSecComponent } from './gift-sec.component';

describe('GiftSecComponent', () => {
  let component: GiftSecComponent;
  let fixture: ComponentFixture<GiftSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftSecComponent]
    });
    fixture = TestBed.createComponent(GiftSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
