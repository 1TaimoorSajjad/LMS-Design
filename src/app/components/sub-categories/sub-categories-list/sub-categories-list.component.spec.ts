import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesListComponent } from './sub-categories-list.component';

describe('SubCategoriesListComponent', () => {
  let component: SubCategoriesListComponent;
  let fixture: ComponentFixture<SubCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
