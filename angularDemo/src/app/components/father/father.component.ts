import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.less']
})
export class FatherComponent implements OnInit {
  public msg= '父级数据';
  public name= '张三';
  @ViewChild('child4') child4;//定义你子组件，（）内的值和#后的值对应
  constructor() { }

  ngOnInit() {
  }
  run(){
    alert('这是父组件的run方法');
  }
  getDataFromChild(childData){
    alert(childData);
  }
  requestData(msg){
    alert(msg);
  }

  getChildData(){
    alert(this.child4.msg);
  }
}
