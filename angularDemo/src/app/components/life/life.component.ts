import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex:number = 1;
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.less']
})
export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterContentChecked,OnDestroy {
  @Input()
  name:string;
  logIt(msg:string){
    console.log(`#${logIndex++}--${msg}`);
  }
  constructor() {
    this.logIt('name属性在constructor里的值是：' + name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }
  ngOnChanges(changes:SimpleChanges):void {
    let name = changes['name'].currentValue;
    this.logIt('name属性在constructor里的值是：' + name);
  }
  ngDoCheck():void {
    this.logIt('ngDoCheck');
  }
  ngAfterContentInit():void {
    this.logIt('ngAfterContentInit');
  }
  // ngAfterContentChecked():void {
  //   this.logIt('ngAfterContentChecked');
  // }
  ngAfterViewInit():void {
    this.logIt('ngAfterViewInit');
  }
  ngAfterContentChecked():void {
    this.logIt('ngAfterContentChecked');
  }
  ngOnDestroy():void {
    this.logIt('ngOnDestroy');
  }


}
