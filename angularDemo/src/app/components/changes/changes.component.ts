import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.less']
})
export class ChangesComponent implements OnInit,OnChanges {

  @Input()
  greeting:string;
  @Input()
  user:{name:string};
  message:string = '初始化消息';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log(JSON.stringify(changes,null,2));
  }

}
