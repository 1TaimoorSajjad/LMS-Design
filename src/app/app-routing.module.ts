import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'courses', component: CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
