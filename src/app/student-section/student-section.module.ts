import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AdmissionInformationComponent } from './admission-information/admission-information.component';
import { ExamComponent } from './exam/exam.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'' , component:StudentDetailsComponent},
  {path : 'admission-info' , component:AdmissionInformationComponent},
  {path : 'exam' , component:ExamComponent},
]

@NgModule({
  declarations: [
    StudentDetailsComponent,
    AdmissionInformationComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentSectionModule { }
