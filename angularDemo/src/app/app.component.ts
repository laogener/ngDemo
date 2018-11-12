import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//组件名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {//数据
  title = 'angularDemo';
  greeting:string = 'Hello';
  user:{name:string} = {name:'Tom'};
}
