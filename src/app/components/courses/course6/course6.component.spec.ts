import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course6Component } from './course6.component';

describe('Course6Component', () => {
  let component: Course6Component;
  let fixture: ComponentFixture<Course6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Course6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
