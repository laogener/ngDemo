import { Component, OnInit } from '@angular/core';
// ActivatedRoute接收动态传值   接收get传值
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.less']
})
export class Route2Component implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.params);//获取动态路由
    console.log(this.route.queryParams);//获取get传值
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      console.log(data.id);
    })
  }

}
