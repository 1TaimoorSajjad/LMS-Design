import { Component, OnInit } from '@angular/core';
import { collection, getDocs, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.css']
})
export class InstructorsListComponent implements OnInit {
  collectionRef: any;
  instructors: any[] = []
  constructor(private firestore: Firestore, private router: Router) { }


  ngOnInit() {

    this.collectionRef = collection(this.firestore, 'instructors');
    this.getInstructors()
  }

  async getInstructors() {
    const querySnapshot = await getDocs(this.collectionRef)
    querySnapshot.forEach((doc) => {
      this.instructors.push({ id: doc.id, data: doc.data() });
    })
    console.log("instructors", this.instructors)
  }

  edit(instructorId: string) {
    this.router.navigateByUrl(`/instructors/${instructorId}/edit`)

  }
}
