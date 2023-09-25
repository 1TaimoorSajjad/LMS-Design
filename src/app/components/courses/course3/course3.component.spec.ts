import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course3Component } from './course3.component';

describe('Course3Component', () => {
  let component: Course3Component;
  let fixture: ComponentFixture<Course3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Course3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
