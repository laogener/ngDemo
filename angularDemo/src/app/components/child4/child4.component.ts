import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.less']
})
export class Child4Component implements OnInit {
  public msg = '我是child4组件的数据';
  constructor() { }

  ngOnInit() {
  }
  run(){
    alert('这是child4组件的方法');
  }
}
