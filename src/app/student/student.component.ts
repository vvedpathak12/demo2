import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public studentname :any;
  public studentage :any;
  public studentid :any;

  constructor(private actRoute : ActivatedRoute) { 

    //First method/option route param

    // this.studentname= this.actRoute.snapshot.params['name'];
    // this.studentage=this.actRoute.snapshot.params['age']
    // this.studentid=this.actRoute.snapshot.params['id']
    // console.log(this.actRoute.snapshot.params);
    // console.log(this.actRoute.snapshot.params['name'])
    // console.log(this.actRoute.snapshot.params['age'])

    //Second method/option param map.

    this.actRoute.paramMap.subscribe((res:any)=> {
      console.log(res.params.name);
      this.studentname=res.params.name;
      this.studentage=res.params.age;
      this.studentid=res.params.id;
    })

  }

  

  ngOnInit(): void {
  }

}
