import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// RxJS是一种针对异步数据流编程工具
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.less']
})
export class HttpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.requestData();
  }
  requestData(){
    this.http.get('http://jsonplaceholder.typicode.com/users/users')
      .subscribe(function(data){
      console.log(data)
    },function(err){
      console.log(err)
    });
  }
}
