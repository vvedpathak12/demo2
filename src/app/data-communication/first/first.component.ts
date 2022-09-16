import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public messageFromFirst : any;

  constructor(private shareService : DataSharingService , private route : Router) {

    // this.shareService.currentData.subscribe((res:any)=>{
    //   console.log(res);
    // },
    // (err:any)=>{
    //   console.log(err);
    // })

    this.shareService.getMessage().subscribe((res:any)=>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    })
   }

   

  ngOnInit(): void {
  }

  sendDataFromFirst(){
    this.messageFromFirst = "This is message from first";
    this.shareService.setMessage(this.messageFromFirst);
    this.route.navigate(['second']);
  }

}
