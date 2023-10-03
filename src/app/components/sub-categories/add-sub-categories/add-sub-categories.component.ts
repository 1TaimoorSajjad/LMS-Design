import { Component, OnInit } from '@angular/core';
import { collection, Firestore, addDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-categories',
  templateUrl: './add-sub-categories.component.html',
  styleUrls: ['./add-sub-categories.component.css']
})
export class AddSubCategoriesComponent implements OnInit {
  subCategoryForm!: FormGroup
  collectionRef: any
  subCategoryId: any
  constructor(private fb: FormBuilder, private firestore: Firestore, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subCategoryForm = this.fb.group({
      title: [''],
      desc: [''],
      category: [''],
    });
    this.collectionRef = collection(this.firestore, 'subcategories');
    this.getSubCategory()
  }

  async onSubmit() {
    try {
      const payload = this.subCategoryForm.value;
      if (this.subCategoryId) {
        const subCategoryDocRef = doc(this.firestore, 'subcategories', this.subCategoryId);
        await setDoc(subCategoryDocRef, payload);
      } else {
        await addDoc(this.collectionRef, payload);
      }
      this.router.navigateByUrl('/sub-categories')
    }
    catch (error) {
      console.error('Error adding/updating document: ', error);
    }
  }

  getSubCategory() {
    this.route.params.subscribe(async (params) => {
      const userId = params['id'];
      if (userId) {
        this.subCategoryId = userId;
        const subcategoryDocRef = doc(this.firestore, 'subcategories', userId);
        const subcategoryDocSnapshot = await getDoc(subcategoryDocRef);
        if (subcategoryDocSnapshot.exists()) {
          const subcategoryData = subcategoryDocSnapshot.data();
          this.subCategoryForm.patchValue(subcategoryData);
        }
      }
    });
  }

}
