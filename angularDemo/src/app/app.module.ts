import { BrowserModule } from '@angular/platform-browser';//解析的模块
import { NgModule } from '@angular/core';//核心模块
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

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
import { FatherComponent } from './components/father/father.component';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { Child4Component } from './components/child4/child4.component';
import { Route1Component } from './components/route1/route1.component';
import { Route2Component } from './components/route2/route2.component';
import { Route3Component } from './components/route3/route3.component';
import { Route4Component } from './components/route4/route4.component';
import { Route5Component } from './components/route5/route5.component';
import { Route5ChildRoute1Component } from './components/route5-child-route1/route5-child-route1.component';
import { Route5ChildRoute2Component } from './components/route5-child-route2/route5-child-route2.component';
import { Route5ChildRoute3Component } from './components/route5-child-route3/route5-child-route3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// ngx-quill富文本框
import { QuillModule } from 'ngx-quill';
import { LifeComponent } from './components/life/life.component';
import { ChangesComponent } from './components/changes/changes.component';
import { ViewhookComponent } from './components/viewhook/viewhook.component';
import { Viewhook2Component } from './components/viewhook2/viewhook2.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './components/reactive-regist/reactive-regist.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

registerLocaleData(zh);

//@NgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。@NgModule接收一个元数据对象，告诉Angular如何编译和启动应用。
@NgModule({
  declarations: [//引入当前项目运行的组件，自定义组件都需要在这里引入
    AppComponent, HeaderComponent, NewsComponent, HomeComponent, TodoListComponent, HttpComponent, FatherComponent, ChildComponent, Child2Component, Child3Component, Child4Component, Route1Component, Route2Component, Route3Component, Route4Component, Route5Component, Route5ChildRoute1Component, Route5ChildRoute2Component, Route5ChildRoute3Component, LifeComponent, ChangesComponent, ViewhookComponent, Viewhook2Component, TemplateFormComponent, ReactiveFormComponent, ReactiveRegistComponent, MobileValidatorDirective, EqualValidatorDirective
  ],
  imports: [//当前项目依赖那些模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    NgZorroAntdModule,
    QuillModule
  ],
  providers: [StorageService, { provide: NZ_I18N, useValue: zh_CN }],//定义的服务
  bootstrap: [AppComponent]//默认启动哪个组件
})
export class AppModule { }
