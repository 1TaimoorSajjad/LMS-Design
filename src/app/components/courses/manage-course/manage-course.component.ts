import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, getDoc, doc, setDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  manageCourseForm!: FormGroup;
  isSubmit = false;
  collectionRef: any;
  courseId:any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private firestore: Firestore
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });

    this.manageCourseForm = this.fb.group({
      title: ['', Validators.required],
      subTitle: ['', Validators.required],
      desc: ['', Validators.required],
      language: ['', Validators.required],
      level: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      price: ['', Validators.required],
    })


    this.collectionRef = collection(this.firestore, 'courses');
    this.getCourseData();

  }


  async getCourseData() {

    const coursesDocRef = doc(this.firestore, 'courses', this.courseId);
    const coursesDocSnapshot = await getDoc(coursesDocRef);
    if (coursesDocSnapshot.exists()) {
      const coursesData = coursesDocSnapshot.data();
      console.log('categoriesData', coursesData)

      this.manageCourseForm.patchValue({
        title: coursesData.title,
        category: coursesData.category,
        // image: categoriesData.image
      });
    }
  }


  get form() {
    return this.manageCourseForm.controls;
  }


  onSubmit() {
    this.isSubmit = true;
    console.log(this.manageCourseForm.value);
    if (this.manageCourseForm.invalid) return;
  }
}
