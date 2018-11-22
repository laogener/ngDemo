import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  // =======手动调用subscribe方法订阅一个流======
  // dataSource:Observable<any>;
  // products:Array<any> =[];
  // =======手动调用subscribe方法订阅一个流======

  // =======在模板上使用管道处理流======
  products:Observable<any>;
  constructor(private http:HttpClient) {
    // =======手动调用subscribe方法订阅一个流======
    // this.dataSource = this.http.get('/api/products');
    // =======手动调用subscribe方法订阅一个流======
    const httpOptions = {
      headers: new HttpHeaders({ 'Author': 'laogener' })
    };
    this.products = this.http.get('/api/products',httpOptions);

  }

  ngOnInit() {
    // =======手动调用subscribe方法订阅一个流======
    // this.dataSource.subscribe((data) => this.products = data)
    // =======手动调用subscribe方法订阅一个流======
  }

}
