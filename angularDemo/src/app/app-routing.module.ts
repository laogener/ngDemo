import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { Route1Component } from './components/route1/route1.component';
import { Route2Component } from './components/route2/route2.component';
import { Route3Component } from './components/route3/route3.component';
import { Route4Component } from './components/route4/route4.component';
import { Route5Component } from './components/route5/route5.component';
import { Route5ChildRoute1Component } from './components/route5-child-route1/route5-child-route1.component';
import { Route5ChildRoute2Component } from './components/route5-child-route2/route5-child-route2.component';
import { Route5ChildRoute3Component } from './components/route5-child-route3/route5-child-route3.component';

// 配置路由
const routes: Routes = [
  {path:'route1',component:Route1Component},
  {path:'route2',component:Route2Component},
  {path:'route3',component:Route3Component},
  // 子路由
  {path:'route5',component:Route5Component,
    children:[
      {path:'childRoute1',component:Route5ChildRoute1Component},
      {path:'childRoute2',component:Route5ChildRoute2Component},
      {path:'childRoute3',component:Route5ChildRoute3Component},
      {path:'',component:Route5ChildRoute1Component},
    ]
  },
  // 动态路由
  {path:'route4/:id',component:Route4Component},
  // 默认路由
  // { path: '', redirectTo: 'route1', pathMatch: 'full' },
  // 匹配不到路由
  // { path: '**',
  //   // component: Route1Component
  //   redirectTo:'route1'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
