import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { InstructorsListComponent } from './components/instructors/instructors-list/instructors-list.component';
import { AddInstructorsComponent } from './components/instructors/add-instructors/add-instructors.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';
import { SubCategoriesListComponent } from './components/sub-categories/sub-categories-list/sub-categories-list.component';
import { AddSubCategoriesComponent } from './components/sub-categories/add-sub-categories/add-sub-categories.component';
import { DocumentsComponent } from './components/instructors/documents/documents.component';
import { Course1Component } from './components/courses/course1/course1.component';
import { Course2Component } from './components/courses/course2/course2.component';
import { Course3Component } from './components/courses/course3/course3.component';
import { Course4Component } from './components/courses/course4/course4.component';
import { Course5Component } from './components/courses/course5/course5.component';
import { Course6Component } from './components/courses/course6/course6.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage } from 'firebase/storage';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    SidenavComponent,
    AddCourseComponent,
    HeaderComponent,
    CourseListComponent,
    InstructorsListComponent,
    AddInstructorsComponent,
    KpiComponent,
    CategoriesListComponent,
    AddCategoriesComponent,
    SubCategoriesListComponent,
    AddSubCategoriesComponent,
    DocumentsComponent,
    Course1Component,
    Course2Component,
    Course3Component,
    Course4Component,
    Course5Component,
    Course6Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
