import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Firestore, collection, addDoc, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-instructors',
  templateUrl: './add-instructors.component.html',
  styleUrls: ['./add-instructors.component.css']
})
export class AddInstructorsComponent implements OnInit {
  constructor(private fb: FormBuilder, private firestore: Firestore, private route: ActivatedRoute, private router: Router) { }
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
    this.getInstructorId()
  }

  async onSubmit() {
    try {
      const payload = this.instructorForm.value;
      if (this.documentId) {
        const instructorDocRef = doc(this.firestore, 'instructors', this.documentId);
        await setDoc(instructorDocRef, payload);
      } else {
        await addDoc(this.collectionRef, payload);
      }
      this.router.navigateByUrl(`/instructors`)
    } catch (error) {
      console.error('Error adding/updating document: ', error);
    }
  }

  getInstructorId() {
    this.route.params.subscribe(async (params) => {
      const userId = params['id'];
      if (userId) {
        this.documentId = userId;
        const instructorDocRef = doc(this.firestore, 'instructors', userId);
        const instructorDocSnapshot = await getDoc(instructorDocRef);
        if (instructorDocSnapshot.exists()) {
          const instructorData = instructorDocSnapshot.data();
          this.instructorForm.patchValue(instructorData);
        }
      }
    });
  }
}
