import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewhook',
  templateUrl: './viewhook.component.html',
  styleUrls: ['./viewhook.component.less']
})
export class ViewhookComponent implements OnInit,AfterViewInit,AfterViewChecked {
  ngAfterViewInit():void{
    console.log('子组件的视图初始化完毕')
  }
  ngAfterViewChecked():void{
    console.log('子组件的视图变更检测完毕')
  }
  constructor() { }

  ngOnInit() {
  }
  greeting(name:string){
    console.log('Hello '+ name);
  }

}
