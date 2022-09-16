import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { ComputerComponent } from './computer/computer.component';
import { EntcComponent } from './entc/entc.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path:'' , component:MechanicalComponent},
  {path :'computer' , component:ComputerComponent},
  {path :'entc' , component:EntcComponent},
]

@NgModule({
  declarations: [
    MechanicalComponent,
    ComputerComponent,
    EntcComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DepartmentsModule { }
