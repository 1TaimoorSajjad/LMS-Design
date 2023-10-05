import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm!: FormGroup
  isCourseType = true
  isTitle = false
  isCategory = false
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      courseType: [''],
      title: [''],
      category: ['']
    })
  }

  isNext(nav: any) {
    if (nav === 'course') {
      this.isCourseType = false
      this.isTitle = true
    }
    else if (nav === 'title') {
      this.isTitle = false
      this.isCategory = true
    }
  }
  getCourseType(selectedCourse: string): any {
    if (this.courseForm) {
      const test = this.courseForm.get('courseType')
      if (test) {
        test.setValue(selectedCourse);
      }

    } else (
      console.log('Error in IF')

    )
  }

  onSubmit() {
    const payload = this.courseForm.value
    console.log("payload", payload);

  }


}
