import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:any;

  @Input() inputname:any

  @Output() itemEvent = new EventEmitter<any>();

  @Output() itembranches = new EventEmitter<any>();

  public dataFromChildToParent : any = "This is the data from child to parent , here @output decorator is used to send the data from child to parent and it uses event binding and also it uses custom events using event emitter."

  dataFromChildToParentUsingViewChild : any;

  public name :any = "";

  public branches: any = ['' , 'Computer' , 'Mechanical' , 'Civil' , 'ENTC']

  public branchesFromChildToParent :any = '';


  constructor() {

    // console.log(this.parentData);
   }

  ngOnInit(): void {

    console.log(this.parentData);
    

    this.dataFromChildToParentUsingViewChild = "This is the data from child to parent , with the help of viewchild we can take complete control of child comp inside parent & we can call methods and properties of child component inside only ngAfterViewInit of parent component"

  }

  sendDataToParent(){
    this.itemEvent.emit(this.dataFromChildToParent);

  }

  executefun(){
    console.log("Hello this function will be called from parent with the help of ViewChild")
  }


  sendInfoToParent(ev:any){
    this.branchesFromChildToParent;
    this.itembranches.emit(ev.target.value);
  }

}
