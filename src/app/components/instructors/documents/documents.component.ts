import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  isNewCertification = false
  constructor() { }

  ngOnInit(): void {
  }

  addCertification() {
    this.isNewCertification = true
  }
}
