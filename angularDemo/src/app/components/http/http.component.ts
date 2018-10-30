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
    this.http.get('https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
      // .map(res =>res.json())//返回的数据转json
      .subscribe(function(data){
      console.log(data)
    },function(err){
      console.log(err)
    });
  }
}
