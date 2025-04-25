import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTrackingPageComponent } from './tasks-tracking-page.component';

describe('TasksTrackingPageComponent', () => {
  let component: TasksTrackingPageComponent;
  let fixture: ComponentFixture<TasksTrackingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksTrackingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksTrackingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
