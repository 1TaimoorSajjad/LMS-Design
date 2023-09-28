import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-instructors',
  templateUrl: './add-instructors.component.html',
  styleUrls: ['./add-instructors.component.css']
})
export class AddInstructorsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  instructorForm!: FormGroup
  ngOnInit(): void {
    this.instructorForm = this.fb.group({

    })
  }

}
