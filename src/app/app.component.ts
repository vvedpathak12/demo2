import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';

  constructor(private router : Router) {}

  navigatetoStaff(){

    console.log("Navigate to Staff");

    //business logic goes here
    //based on business logic we can navigate to another component using router.navigate

    // this.router.navigate(['student/virat/34/18']);

    this.router.navigateByUrl('staff');



  }

  navigatetoAboutUs(){
    console.log("Navigate to About Us");

    //business logic goes here
    //based on business logic we can navigate to another component using router.navigate

    // this.router.navigate(['aboutus']);

    this.router.navigateByUrl('aboutus');
  }
}
