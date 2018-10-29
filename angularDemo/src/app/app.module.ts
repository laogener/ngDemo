import { BrowserModule } from '@angular/platform-browser';//解析的模块
import { NgModule } from '@angular/core';//核心模块
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';//自定义模块


import { StorageService } from './services/storage.service';
import { HttpComponent } from './components/http/http.component';//引入服务
import { HttpClientModule,HttpClientJsonpModule }    from '@angular/common/http';//引入http模块
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//@NgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。@NgModule接收一个元数据对象，告诉Angular如何编译和启动应用。
@NgModule({
  declarations: [//引入当前项目运行的组件，自定义组件都需要在这里引入
    AppComponent, HeaderComponent, NewsComponent, HomeComponent, TodoListComponent, HttpComponent
  ],
  imports: [//当前项目依赖那些模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [StorageService],//定义的服务
  bootstrap: [AppComponent]//默认启动哪个组件
})
export class AppModule { }
