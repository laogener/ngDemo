import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = '这是一个头部组件';
  msg:any;
  constructor() { }//构造函数

  ngOnInit() {//生命周期函数，加载触发的方法
    this.msg = '定义的消息';
  }

}
