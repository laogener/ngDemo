import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewhook2',
  templateUrl: './viewhook2.component.html',
  styleUrls: ['./viewhook2.component.less']
})
export class Viewhook2Component implements OnInit,AfterContentInit,AfterContentChecked {
  ngAfterContentInit(){
    console.log('子组件投影内容初始化完毕')
  }
  ngAfterContentChecked(){
    console.log('子组件投影内容变更检测完毕')
  }
  constructor() { }

  ngOnInit() {
  }

}
