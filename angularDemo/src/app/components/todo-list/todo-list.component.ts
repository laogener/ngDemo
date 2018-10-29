import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';//引入服务

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  public userNmae:any;
  public list = [];
  // public local= new StorageService();//可以引入服务，但官方不推荐
  constructor(private local:StorageService) {//private local:StorageService   依赖注入服务
    this.userNmae = '';
    console.log(this.local);
    this.local.setItem('name','李四')
  }

  ngOnInit() {
  }
  addData(){
    this.list.push(this.userNmae)
  }
  delData(i){
    this.list.splice(i,1);
  }

}
