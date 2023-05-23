import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekGridComponent } from './week-grid.component';

describe('WeekGridComponent', () => {
  let component: WeekGridComponent;
  let fixture: ComponentFixture<WeekGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
