import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnReadComponent } from './btn-read.component';

describe('BtnReadComponent', () => {
  let component: BtnReadComponent;
  let fixture: ComponentFixture<BtnReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnReadComponent]
    });
    fixture = TestBed.createComponent(BtnReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
