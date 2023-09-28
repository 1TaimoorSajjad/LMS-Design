import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-instructors',
  templateUrl: './add-instructors.component.html',
  styleUrls: ['./add-instructors.component.css']
})
export class AddInstructorsComponent implements OnInit {
  constructor(private fb: FormBuilder, private firestore: Firestore, private router: ActivatedRoute) { }
  collectionRef: any
  instructorForm!: FormGroup;
  documentId: any

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
    this.router.params.subscribe((params) => {
      const userId = params['id'];
      if (userId) {
        this.documentId = userId;

      }
    });

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
