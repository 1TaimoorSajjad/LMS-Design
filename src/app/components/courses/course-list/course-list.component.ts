import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDoc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  collectionRef: any;
  courses: any;
  constructor(private firestore: Firestore) { }

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

}
