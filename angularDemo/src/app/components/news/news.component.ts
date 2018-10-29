import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  title = '你好angular';//属性
  msg:any;//另一种定义属性的方法
  msg1:string = '这是一个string类型的msg';
  /*
  修饰符：
  public     公有       类的内外都可以使用
  protected  受保护的   只在当前类或他的子类里面可以使用
  private    私有       只在当前类可以访问这个属性
  */
  public  userName = '张三';//带修饰符的属性
  public id = '123';
  public h = '';
  public list =[];
  constructor() {
    this.msg = '这是另一种定义属性的方法';
    this.h = '<h2>这是新闻的标题</h2>';
    this.list = ['111','222','333'];
  }

  ngOnInit() {
  }

}
