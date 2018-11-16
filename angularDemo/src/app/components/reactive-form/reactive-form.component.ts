import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {
  username:FormControl = new FormControl('aaa');
  formModel:FormGroup = new FormGroup({
    username: new FormControl('bbb'),
    dateRange:new FormGroup({
      from:new FormControl(),
      to:new FormControl()
    }),
    emails:new FormArray([
      new FormControl('13231@qq.com'),
      new FormControl('asdad@qq.com')
    ])
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value);
  }
  addEmail(){
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
