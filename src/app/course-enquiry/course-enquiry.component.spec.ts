import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnquiryComponent } from './course-enquiry.component';

describe('CourseEnquiryComponent', () => {
  let component: CourseEnquiryComponent;
  let fixture: ComponentFixture<CourseEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEnquiryComponent]
    });
    fixture = TestBed.createComponent(CourseEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
