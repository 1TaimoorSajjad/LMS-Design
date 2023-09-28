import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-instructors',
  templateUrl: './add-instructors.component.html',
  styleUrls: ['./add-instructors.component.css']
})
export class AddInstructorsComponent implements OnInit {
  constructor(private fb: FormBuilder, private firestore: Firestore) { }
  collectionRef: any
  instructorForm!: FormGroup;

  ngOnInit(): void {
    this.instructorForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      state: [''],
      address: [''],
      type: ['']
    });
    this.collectionRef = collection(this.firestore, 'instructors');

  }

  async onSubmit() {
    try {
      const payload = this.instructorForm.value;
      const docRef = await addDoc(this.collectionRef, payload);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
}
