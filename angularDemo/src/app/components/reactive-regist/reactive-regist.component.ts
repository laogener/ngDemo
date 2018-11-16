import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// 导入验证组件
import {equalValidator, mobileAsyncValidator, mobileValidator} from "../../validator/validators";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.less']
})
export class ReactiveRegistComponent implements OnInit {
  private formModel:FormGroup;

  // mobileValidator(control:FormControl):any{
  //   var myreq =  /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid = myreq.test(control.value);
  //   // console.log('mobile的校验结果'+ valid);
  //   return valid ? null : {mobile:{ info: '请输入正确的手机号' }};
  // }
  // equalValidator(group:FormGroup):any{
  //   let psw:FormControl = group.get('psw') as FormControl;
  //   let repsw:FormControl = group.get('repsw') as FormControl;
  //   // console.log(psw);
  //   let valid:boolean = (psw.value === repsw.value);
  //   // console.log('密码校验结果'+ valid);
  //   return valid ? null : {equal:{ info: '两次密码不一致' }};
  // }


  // constructor() {
  //   this.formModel =new FormGroup({
  //     username:new FormControl(),
  //     mobile:new FormControl(),
  //     pswGroups:new FormGroup({
  //       psw:new FormControl(),
  //       repsw:new FormControl()
  //     })
  //   })
  // }
  constructor(private fb:FormBuilder) {
    this.formModel =this.fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      // mobile:['',this.mobileValidator],
      // pswGroups:this.fb.group({
      //   psw:['',Validators.minLength(6)],
      //   repsw:['']
      // },{validator:this.equalValidator})

      // 导入验证组件
      // mobile:['',mobileValidator],
      mobile:['',mobileValidator,mobileAsyncValidator],
      pswGroups:fb.group({
        psw:['',Validators.minLength(6)],
        repsw:['']
      },{validator:equalValidator})
      // 导入验证组件
    })
  }

  ngOnInit() {
  }
  onSubmit(){
    let isValid:boolean = this.formModel.get('username').valid;
    console.log('username的校验结果'+ isValid);
    let errors:any = this.formModel.get('username').errors;
    console.log('username的错误信息是'+ JSON.stringify(errors));
    if(this.formModel.valid){
      console.log(this.formModel.value);
      alert(1);
    }
  }

}
