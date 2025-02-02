import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPantryComponent } from './view-pantry.component';

describe('ViewPantryComponent', () => {
  let component: ViewPantryComponent;
  let fixture: ComponentFixture<ViewPantryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPantryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPantryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
