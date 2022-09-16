import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { FirstComponent } from './data-communication/first/first.component';
import { ParentComponent } from './data-communication/parent/parent.component';
import { SecondComponent } from './data-communication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponent , resolve :[AuthGuard]},
  // {path : 'student/:name/:age/:id' , component : StudentComponent , canActivate : [AuthGuard]},
  // {path : 'staff' , component : StaffComponent , canActivate : [AuthGuard]},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'parent' , component : ParentComponent},
  {path : 'first' , component : FirstComponent},
  {path : 'second' , component : SecondComponent},
  // {path : '**' , component : ErrorComponent},
  // {path : '**' , redirectTo : 'student'},
  {
    path:'student-sec' , loadChildren : ()=> import('./student-section/student-section.module').then(mod=>mod.StudentSectionModule),
  },

  {
    path:'departments' , loadChildren : ()=> import('./departments/departments.module').then(mod=>mod.DepartmentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
