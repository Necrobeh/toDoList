import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOverViewComponent } from './task-over-view.component';

describe('TaskOverViewComponent', () => {
  let component: TaskOverViewComponent;
  let fixture: ComponentFixture<TaskOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
