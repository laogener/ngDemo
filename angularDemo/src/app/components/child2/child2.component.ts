import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.less']
})
export class Child2Component implements OnInit {
  @Input() run;
  @Input() getDataFromChild;

  public msg = '我是子组件数据';
  constructor() { }

  ngOnInit() {
  }
  sendToParent(){
    this.getDataFromChild(this.msg);
  }

}
