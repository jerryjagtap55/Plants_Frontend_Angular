import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverStoryComponent } from './over-story.component';

describe('OverStoryComponent', () => {
  let component: OverStoryComponent;
  let fixture: ComponentFixture<OverStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverStoryComponent]
    });
    fixture = TestBed.createComponent(OverStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
