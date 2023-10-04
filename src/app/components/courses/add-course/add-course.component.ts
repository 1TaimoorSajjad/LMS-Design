import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm!: FormGroup
  isNext = false
  isLast = false
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      courseType: [''],

      title: [''],
      category: ['']
    })
  }

  isCourse() {
    this.courseForm.value.courseType = "course"
    console.log("CourseForm", this.courseForm.value)
    this.isNext = true
  }
  isTitle() {
    this.isLast = true
  }

}
