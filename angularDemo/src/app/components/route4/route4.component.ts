import { Component, OnInit } from '@angular/core';
// 引入ActivatedRoute模块
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.less']
})
export class Route4Component implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // 获取动态路由
    console.log(this.route.params);
    this.route.paramMap.subscribe((data)=>{
      console.log(data);
      console.log(data.get('id'));
    })
  }

}
