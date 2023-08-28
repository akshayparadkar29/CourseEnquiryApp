import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-enquiry',
  templateUrl: './course-enquiry.component.html',
  styleUrls: ['./course-enquiry.component.css']
})
export class CourseInquiryComponent implements OnInit {
  inquiryForm: FormGroup = new FormGroup({});
  courses: string[] = ['Course A', 'Course B', 'Course C'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inquiryForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.inquiryForm.valid) {
      const inquiry = this.inquiryForm.value;
      console.log('Course Inquiry:', inquiry);
    }
  }
}
