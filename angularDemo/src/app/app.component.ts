import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import {createViewChild, createViewChildren} from "../../node_modules/@angular/compiler/src/core";

import { ViewhookComponent } from './components/viewhook/viewhook.component';

@Component({
  selector: 'app-root',//组件名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
// ***********app-viewhook*********
// export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {
// ***********app-viewhook2*********
// export class AppComponent implements AfterViewInit ,AfterContentInit,AfterContentChecked{
export class AppComponent {
  title = 'angularDemo';
  greeting:string = 'Hello';
  user:{name:string} = {name:'Tom'};
  divContent = '<div>angularDemo练习</div>';


  // ***********app-viewhook*********
  // message:string;
  // ngAfterViewInit():void{
  //   console.log('父组件的视图初始化完毕');
  //   setTimeout(() =>{
  //     this.message = 'Hello';
  //   },0)
  // }
  // ngAfterViewChecked():void{
  //   console.log('父组件的视图变更检测完毕')
  // }
  // @ViewChild('child1')
  // child1:ViewhookComponent;
  // ngOnInit():void{
  //   setInterval(() =>{
  //     this.child1.greeting('Tom');
  //   },5000)
  // }
  // ***********app-viewhook*********


  // ***********app-viewhook2*********

  // ngAfterContentInit(){
  //   console.log('父组件投影内容初始化完毕')
  // }
  // ngAfterContentChecked(){
  //   console.log('父组件投影内容变更检测完毕')
  // }
  // ngAfterViewInit(){
  //   console.log('父组件视图内容初始化完毕')
  // }
  // ***********app-viewhook2*********
}
