import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course5Component } from './course5.component';

describe('Course5Component', () => {
  let component: Course5Component;
  let fixture: ComponentFixture<Course5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Course5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
