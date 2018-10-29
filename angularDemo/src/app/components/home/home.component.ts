import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public msg:any;
  public flag:any;
  public search:any;
  constructor() {
    this.msg = '这是一个首页组件';
    this.flag = true;
    this.search = '搜索的内容';
  }

  ngOnInit() {
  }
  getMsg(){//自定义方法
    alert(this.msg);
  }
  keyUpFn(e){
    console.log(e);
  }

}
