import { Component, OnInit } from '@angular/core';

// 引入Router;NavigationExtras  get传参
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.less']
})
export class Route1Component implements OnInit {

  constructor(private router:Router) {

  }

  ngOnInit() {
  }
  goRoute2(){
    this.router.navigate(['/route2'])
  }
  toRoute2(id,aid){
    // 跳转路由  get传值
    let navigationExtras:NavigationExtras = {
      queryParams:{
        'id':id,
        'aid':aid
      },
      // fragment:'anchor'
    }
    this.router.navigate(['/route2'],navigationExtras)
  }

}
