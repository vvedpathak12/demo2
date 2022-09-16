import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public dataFromParentToChild:any;

  public dataFromChildToParent:any;

  @ViewChild(ChildComponent) childComp : any;

  dataWithViewChild : any;

  public name :any = "";

  public branchesFromChildToParent : any;

  constructor() { 

    console.log(this. childComp);

    this.dataFromParentToChild = "This is the data from parent to child , here @Input decorator is used to send the data from parent to child and it uses attribute or property binding."

    this.name = "";
  }

  ngOnInit(): void {
    console.log(this. childComp);
  }

  ngAfterViewInit(){
    // console.log(this.childComp);

    setTimeout(() => {
      console.log(this.childComp.dataFromChildToParentUsingViewChild);
      this.dataWithViewChild = this.childComp.dataFromChildToParentUsingViewChild;

      this.childComp.executefun();
    },1000);

  }

  emitDataFromChild(ev:any){
    console.log("hello");
    console.log(ev);
    this.dataFromChildToParent=ev;
  }

  emitbranchesFromChild(ev:any){
    console.log(ev);
    this.branchesFromChildToParent = ev;
  }


}
