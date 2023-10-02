import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, getDoc, doc, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  categoryForm!: FormGroup;
  collectionRef: any;
  categoryId: any;
  documentId: any;
  isSubmit = false;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      console.log(this.categoryId)
    });

    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      image: [''],

    });



    this.collectionRef = collection(this.firestore, 'categories');
    this.getCategoriesData()

  }


  async onSave() {
    this.isSubmit = true;
    if (this.categoryForm.invalid) {
      return;
    }

    try {
      const payload = this.categoryForm.value
      if (this.categoryId) {
        const categoriesDoc = doc(this.firestore, 'categories', this.categoryId);
        await setDoc(categoriesDoc, payload);

      }
      else {

        await addDoc(this.collectionRef, payload);

      }
      this.router.navigateByUrl('/categories');
    }

    catch {
      console.log('Catch run')
    }
    this.isSubmit = false;
  }


  async getCategoriesData() {

    const categoriesDocRef = doc(this.firestore, 'categories', this.categoryId);
    const categoriesDocSnapshot = await getDoc(categoriesDocRef);
    if (categoriesDocSnapshot.exists()) {
      const categoriesData = categoriesDocSnapshot.data();
      this.categoryForm.patchValue(categoriesData);
    }
  }

  get form() {
    console.log('controls', this.categoryForm.controls)
    return this.categoryForm.controls;
  }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  // uploadImage() {
  //   if (this.selectedFile) {
  //     const filePath = `images/${this.selectedFile.name}`;
  //     const storageRef = this.storage.ref(filePath);

  //     const uploadTask = storageRef.put(this.selectedFile);

  //     uploadTask.snapshotChanges().subscribe(
  //       (snapshot) => {
  //         if (snapshot && snapshot.state === 'success') {
  //           console.log('Image uploaded successfully');
  //           // You can also get the download URL here:
  //           storageRef.getDownloadURL().subscribe((downloadURL) => {
  //             console.log('Download URL:', downloadURL);
  //             // You can save the download URL to your database or use it as needed.
  //           });
  //         }
  //       },
  //       (error) => {
  //         console.error('Image upload failed:', error);
  //       }
  //     );
  //   } else {
  //     console.error('No file selected.');
  //   }
  // }
}


