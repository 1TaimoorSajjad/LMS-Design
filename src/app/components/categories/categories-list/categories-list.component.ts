import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';
import { QuerySnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  collectionRef: any;
  categories: any;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {




    this.collectionRef = collection(this.firestore, 'categories');
    this.getCategories()

  }


  async getCategories() {

    try {

      const querySnapshot = await getDocs(this.collectionRef);
      this.categories = querySnapshot.docs.map(doc => {
        return { id: doc.id, data: doc.data() };
      }

      );console.log(this.categories, 'categories')
    }

    catch {
      console.log('catch run');
    }

  }

}
