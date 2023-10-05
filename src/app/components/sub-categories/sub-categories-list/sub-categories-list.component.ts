import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-categories-list',
  templateUrl: './sub-categories-list.component.html',
  styleUrls: ['./sub-categories-list.component.css']
})
export class SubCategoriesListComponent implements OnInit {
  collectionRef: any;
  subCategories: any[] = []
  constructor(private firestore: Firestore, private router: Router) { }

  ngOnInit(): void {

    this.collectionRef = collection(this.firestore, 'subcategories');
    this.getsubCategories()
  }
  async getsubCategories() {
    const querySnapshot = await getDocs(this.collectionRef)
    querySnapshot.forEach((doc) => {
      this.subCategories.push({ id: doc.id, data: doc.data() });
    })
    console.log("instructors", this.subCategories)
  }

  edit(subCategoryId: string) {
    this.router.navigateByUrl(`/sub-categories/${subCategoryId}/edit`)

  }

}
