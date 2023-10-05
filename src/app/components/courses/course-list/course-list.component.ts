import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDoc, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  collectionRef: any;
  courses: any;
  constructor(private firestore: Firestore, private router: Router) { }

  ngOnInit(): void {
    this.collectionRef = collection(this.firestore, 'courses')
    this.getCourses()
  }

  async getCourses() {
    try {

      const querySnapshot = await getDocs(this.collectionRef)
      this.courses = querySnapshot.docs.map(doc => {
        return { id: doc.id, data: doc.data() };
      }

      ); console.log(this.courses, 'courses')
    }
    catch {
      console.log('Error Fetching data from the db ')
    }

  }

  onEdit(documentId: any) {
    console.log("this.courses.id", documentId)
    this.router.navigateByUrl('/add-course/edit/' + documentId)
  }

}
