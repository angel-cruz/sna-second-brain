import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCoderComponent } from './interview-coder.component';

describe('InterviewCoderComponent', () => {
  let component: InterviewCoderComponent;
  let fixture: ComponentFixture<InterviewCoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewCoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewCoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
