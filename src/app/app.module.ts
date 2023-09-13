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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
