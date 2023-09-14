import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { InstructorsListComponent } from './components/instructors/instructors-list/instructors-list.component';
import { AddInstructorsComponent } from './components/instructors/add-instructors/add-instructors.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'courses', component: CourseListComponent
  },
  {
    path: 'add-course', component: AddCourseComponent
  },
  {
    path: 'instructors', component: InstructorsListComponent
  },
  {
    path: 'add-instructor', component: AddInstructorsComponent
  },
  {
    path: 'kpi', component: KpiComponent
  },
  {
    path: 'categories', component: CategoriesListComponent
  },
  {
    path: 'add-category', component: AddCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
