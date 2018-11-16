import {FormControl, FormGroup} from "@angular/forms";
import {of} from "rxjs";
import { delay } from 'rxjs/operators';
export function mobileValidator(control:FormControl):any{
  var myreq =  /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreq.test(control.value);
  // console.log('mobile的校验结果'+ valid);
  return valid ? null : {mobile:{ info: '请输入正确的手机号' }};
}
export function mobileAsyncValidator(control:FormControl):any{
  var myreq =  /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreq.test(control.value);
  console.log('mobile的校验结果'+ valid);
  return of( valid ? null : {mobile:true}).pipe(delay(5000));
}
export function equalValidator(group:FormGroup):any{
  let psw:FormControl = group.get('psw') as FormControl;
  let repsw:FormControl = group.get('repsw') as FormControl;
  let valid:boolean = false;
  if(psw && repsw){
    valid = (psw.value === repsw.value);
  }
  // console.log('密码校验结果'+ valid);
  return valid ? null : {equal:{ info: '两次密码不一致' }};
}
