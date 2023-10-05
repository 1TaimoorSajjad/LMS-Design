import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { InstructorsListComponent } from './components/instructors/instructors-list/instructors-list.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { AddInstructorsComponent } from './components/instructors/add-instructors/add-instructors.component';
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
import { ManageCourseComponent } from './components/courses/manage-course/manage-course.component';


const routes: Routes = [
  // {
  //   path: '', component: DashboardComponent
  // },
  {
    path: 'signin', component: SigninComponent
  },

  {
    path: '', component: CourseListComponent
  },

  {
    path: 'courses', component: CourseListComponent
  },

  {
    path: 'courses/add', component: AddCourseComponent
  },

  {
    path: 'courses/:id:/manage', component: ManageCourseComponent
  },


  {
    path: 'instructors', component: InstructorsListComponent
  },
  {
    path: 'instructors/add', component: AddInstructorsComponent
  },
  {
    path: 'instructors/:id/edit', component: AddInstructorsComponent
  },
  {
    path: 'instructors/:id/documents', component: DocumentsComponent
  },
  {
    path: 'kpi', component: KpiComponent
  },
  {
    path: 'categories', component: CategoriesListComponent
  },
  {
    path: 'categories/add', component: AddCategoriesComponent,

  },
  {
    path: 'categories/:id/edit', component: AddCategoriesComponent
  },

  {
    path: 'sub-categories', component: SubCategoriesListComponent
  },
  {
    path: 'sub-categories/add', component: AddSubCategoriesComponent
  },
  {
    path: 'sub-categories/:id/edit', component: AddSubCategoriesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
