import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private shareService1 : DataSharingService) { 

    this.shareService1.currentData.subscribe((res:any)=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
}
