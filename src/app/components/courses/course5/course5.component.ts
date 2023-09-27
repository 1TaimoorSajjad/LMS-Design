import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course5',
  templateUrl: './course5.component.html',
  styleUrls: ['./course5.component.css']
})
export class Course5Component implements OnInit {
  isNewSection = false
  isCurriculumItem = false
  isAssignment = false
  constructor() { }

  ngOnInit(): void {
  }

  addSection() {
    this.isNewSection = true
  }
  addCurriculumItem() {
    this.isCurriculumItem = true
  }
  addAssignment() {
    this.isAssignment = true
  }

}
