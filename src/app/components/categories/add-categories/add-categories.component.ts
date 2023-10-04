import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, getDoc, doc, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ActivatedRoute, Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
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
  downloadURL: string | null = null;
  imagePreview: any | null = null;

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
      
      this.categoryForm.patchValue({
        title: categoriesData.title,
        desc: categoriesData.desc,
        // image: categoriesData.image
      });
    }
  }

  get form() {
    console.log('controls', this.categoryForm.controls)
    return this.categoryForm.controls;
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    // Display image preview
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result;
        console.log('imagePreview', this.imagePreview)
      };
      reader.readAsDataURL(this.selectedFile);
      
    }

    // this.uploadFile();
  }

  async uploadFile(): Promise<void> {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
   debugger
    const storage = getStorage();
    const filePath = `uploads/${this.selectedFile.name}`;
    // console.log('filePath', filePath)
    const storageRef = ref(storage, filePath);

    const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);

    try {
      const snapshot = await uploadTask;

      if (snapshot.state === 'success') {
        const downloadURL = await getDownloadURL(snapshot.ref);
        // console.log('File uploaded. Download URL:', downloadURL);
        this.downloadURL = downloadURL;
      }
    } catch (error) {
      console.error('File upload failed:', error);
    }
  }
}


