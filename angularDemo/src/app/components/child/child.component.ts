import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() msg:string;//通过input接收父组件传入的msg
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
