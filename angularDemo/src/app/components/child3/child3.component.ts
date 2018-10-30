import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.less']
})
export class Child3Component implements OnInit {
  // EventEmitter实现子组件给父组件传值
  @Output() toParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  useParentFn(){
    this.toParent.emit('子组件的数据传给父组件，并调用父组件方法')
  }
}
