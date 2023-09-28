import { Component, OnInit } from '@angular/core';
import { collection, getDocs, Firestore } from '@angular/fire/firestore';
import { query } from 'firebase/firestore';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.css']
})
export class InstructorsListComponent implements OnInit {
  collectionRef: any;
  instructors: any[] = []
  constructor(private firestore: Firestore) { }


  ngOnInit() {

    this.collectionRef = collection(this.firestore, 'instructors');
    this.getInstructors()
  }

  async getInstructors() {
    const querySnapshot = await getDocs(this.collectionRef)
    querySnapshot.forEach((doc) => {
      this.instructors.push(doc.data())
    })
    console.log("instructors", this.instructors)
  }

}
