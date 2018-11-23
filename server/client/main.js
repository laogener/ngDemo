(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_route1_route1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/route1/route1.component */ "./src/app/components/route1/route1.component.ts");
/* harmony import */ var _components_route2_route2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/route2/route2.component */ "./src/app/components/route2/route2.component.ts");
/* harmony import */ var _components_route3_route3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/route3/route3.component */ "./src/app/components/route3/route3.component.ts");
/* harmony import */ var _components_route4_route4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/route4/route4.component */ "./src/app/components/route4/route4.component.ts");
/* harmony import */ var _components_route5_route5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/route5/route5.component */ "./src/app/components/route5/route5.component.ts");
/* harmony import */ var _components_route5_child_route1_route5_child_route1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/route5-child-route1/route5-child-route1.component */ "./src/app/components/route5-child-route1/route5-child-route1.component.ts");
/* harmony import */ var _components_route5_child_route2_route5_child_route2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/route5-child-route2/route5-child-route2.component */ "./src/app/components/route5-child-route2/route5-child-route2.component.ts");
/* harmony import */ var _components_route5_child_route3_route5_child_route3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/route5-child-route3/route5-child-route3.component */ "./src/app/components/route5-child-route3/route5-child-route3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// 引入组件








// 配置路由
var routes = [
    { path: 'route1', component: _components_route1_route1_component__WEBPACK_IMPORTED_MODULE_2__["Route1Component"] },
    { path: 'route2', component: _components_route2_route2_component__WEBPACK_IMPORTED_MODULE_3__["Route2Component"] },
    { path: 'route3', component: _components_route3_route3_component__WEBPACK_IMPORTED_MODULE_4__["Route3Component"] },
    // 子路由
    { path: 'route5', component: _components_route5_route5_component__WEBPACK_IMPORTED_MODULE_6__["Route5Component"],
        children: [
            { path: 'childRoute1', component: _components_route5_child_route1_route5_child_route1_component__WEBPACK_IMPORTED_MODULE_7__["Route5ChildRoute1Component"] },
            { path: 'childRoute2', component: _components_route5_child_route2_route5_child_route2_component__WEBPACK_IMPORTED_MODULE_8__["Route5ChildRoute2Component"] },
            { path: 'childRoute3', component: _components_route5_child_route3_route5_child_route3_component__WEBPACK_IMPORTED_MODULE_9__["Route5ChildRoute3Component"] },
            { path: '', component: _components_route5_child_route1_route5_child_route1_component__WEBPACK_IMPORTED_MODULE_7__["Route5ChildRoute1Component"] },
        ]
    },
    // 动态路由
    { path: 'route4/:id', component: _components_route4_route4_component__WEBPACK_IMPORTED_MODULE_5__["Route4Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--<app-news></app-news>-->\n<!--<app-home></app-home>-->\n<!--<app-todo-list></app-todo-list>-->\n<!--<app-http></app-http>-->\n<!--<app-father></app-father>-->\n\n\n<!--<p>根路由</p>-->\n<!--<ul>-->\n  <!--<li><a routerLink=\"/route1\" routerLinkActive=\"active\">route1组件</a></li>-->\n  <!--<li><a routerLink=\"/route2\" routerLinkActive=\"active\">route2组件</a></li>-->\n  <!--<li><a routerLink=\"/route3\" routerLinkActive=\"active\">route3组件</a></li>-->\n  <!--<li><a routerLink=\"/route5\" routerLinkActive=\"active\">route5组件&#45;&#45;&#45;&#45;配置子路由</a></li>-->\n<!--</ul>-->\n<!--<router-outlet></router-outlet>-->\n\n<!--<p>Ant Design  UI 框架</p>-->\n<!--<button nz-button nzType=\"primary\">Primary</button>-->\n<!--<button nz-button nzType=\"primary\"><i nz-icon type=\"search\"></i>Search</button>-->\n\n<!--<p>ngx-quill富文本框</p>-->\n<!--<quill-editor></quill-editor>-->\n<!--<p>生命周期钩子</p>-->\n<!--<app-life [name]=\"title\"></app-life>-->\n\n<!--<p>生命周期钩子-&#45;&#45;ngOnChanges</p>-->\n<!--<div>-->\n  <!--<h2>我是父组件</h2>-->\n  <!--<div>问候语：<input type=\"text\" [(ngModel)] = 'greeting'></div>-->\n  <!--<div>姓名：<input type=\"text\" [(ngModel)] = 'user.name'></div>-->\n  <!--<app-changes [greeting] = 'greeting' [user] = 'user'></app-changes>-->\n<!--</div>-->\n\n<!--<p>view钩子-&#45;&#45;父组件调用子组件方法AfterViewInit,AfterViewChecked </p>-->\n<!--<app-viewhook #child1></app-viewhook>-->\n<!--<app-viewhook #child2></app-viewhook>-->\n<!--<button (click)=\"child2.greeting('Jack')\">调用child2的greeting方法&#45;&#45;{{message}}</button>-->\n\n<!--<p>ng-content父组件投影到子组件，innerHtml绑定html代码到页面</p>-->\n<!--<div class=\"wrapper\">-->\n  <!--<h2>我是父组件</h2>-->\n  <!--<div>这个div定义在父组件中</div>-->\n  <!--<app-viewhook2>-->\n    <!--<div class=\"header\">这是页头，这个div是父组件投影到子组件的,title是{{title}}</div>-->\n    <!--<div class=\"footer\">这是页脚，这个div是父组件投影到子组件的</div>-->\n  <!--</app-viewhook2>-->\n<!--</div>-->\n<!--<div [innerHtml]=\"divContent\"></div>-->\n\n<!--<p>表单</p>-->\n<!--<p>模板表单</p>-->\n<!--<app-template-form></app-template-form>-->\n<!--<p>响应式表单</p>-->\n<!--<app-reactive-form></app-reactive-form>-->\n<!--<p>响应式注册表单</p>-->\n<!--<app-reactive-regist></app-reactive-regist>-->\n<!--<p>http通讯</p>-->\n<!--<app-product></app-product>-->\n\n<p>websocket</p>\n<app-web-socket></app-web-socket>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: darkblue;\n  color: #ffffff;\n}\n[nz-button] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n.wrapper {\n  background-color: darkblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovbmdEZW1vL2FuZ3VsYXJEZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7Q0NDRDtBRENEO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtDQ0NEO0FEQ0Q7RUFDRSwyQkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuW256LWJ1dHRvbl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi53cmFwcGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbn1cbiIsIi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5bbnotYnV0dG9uXSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularDemo';
        this.greeting = 'Hello';
        this.user = { name: 'Tom' };
        this.divContent = '<div>angularDemo练习</div>';
        // ***********app-viewhook*********
        // message:string;
        // ngAfterViewInit():void{
        //   console.log('父组件的视图初始化完毕');
        //   setTimeout(() =>{
        //     this.message = 'Hello';
        //   },0)
        // }
        // ngAfterViewChecked():void{
        //   console.log('父组件的视图变更检测完毕')
        // }
        // @ViewChild('child1')
        // child1:ViewhookComponent;
        // ngOnInit():void{
        //   setInterval(() =>{
        //     this.child1.greeting('Tom');
        //   },5000)
        // }
        // ***********app-viewhook*********
        // ***********app-viewhook2*********
        // ngAfterContentInit(){
        //   console.log('父组件投影内容初始化完毕')
        // }
        // ngAfterContentChecked(){
        //   console.log('父组件投影内容变更检测完毕')
        // }
        // ngAfterViewInit(){
        //   console.log('父组件视图内容初始化完毕')
        // }
        // ***********app-viewhook2*********
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
        // ***********app-viewhook*********
        // export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {
        // ***********app-viewhook2*********
        // export class AppComponent implements AfterViewInit ,AfterContentInit,AfterContentChecked{
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _components_http_http_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/http/http.component */ "./src/app/components/http/http.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_father_father_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/father/father.component */ "./src/app/components/father/father.component.ts");
/* harmony import */ var _components_child_child_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/child/child.component */ "./src/app/components/child/child.component.ts");
/* harmony import */ var _components_child2_child2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/child2/child2.component */ "./src/app/components/child2/child2.component.ts");
/* harmony import */ var _components_child3_child3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/child3/child3.component */ "./src/app/components/child3/child3.component.ts");
/* harmony import */ var _components_child4_child4_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/child4/child4.component */ "./src/app/components/child4/child4.component.ts");
/* harmony import */ var _components_route1_route1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/route1/route1.component */ "./src/app/components/route1/route1.component.ts");
/* harmony import */ var _components_route2_route2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/route2/route2.component */ "./src/app/components/route2/route2.component.ts");
/* harmony import */ var _components_route3_route3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/route3/route3.component */ "./src/app/components/route3/route3.component.ts");
/* harmony import */ var _components_route4_route4_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/route4/route4.component */ "./src/app/components/route4/route4.component.ts");
/* harmony import */ var _components_route5_route5_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/route5/route5.component */ "./src/app/components/route5/route5.component.ts");
/* harmony import */ var _components_route5_child_route1_route5_child_route1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/route5-child-route1/route5-child-route1.component */ "./src/app/components/route5-child-route1/route5-child-route1.component.ts");
/* harmony import */ var _components_route5_child_route2_route5_child_route2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/route5-child-route2/route5-child-route2.component */ "./src/app/components/route5-child-route2/route5-child-route2.component.ts");
/* harmony import */ var _components_route5_child_route3_route5_child_route3_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/route5-child-route3/route5-child-route3.component */ "./src/app/components/route5-child-route3/route5-child-route3.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _components_life_life_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/life/life.component */ "./src/app/components/life/life.component.ts");
/* harmony import */ var _components_changes_changes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/changes/changes.component */ "./src/app/components/changes/changes.component.ts");
/* harmony import */ var _components_viewhook_viewhook_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/viewhook/viewhook.component */ "./src/app/components/viewhook/viewhook.component.ts");
/* harmony import */ var _components_viewhook2_viewhook2_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/viewhook2/viewhook2.component */ "./src/app/components/viewhook2/viewhook2.component.ts");
/* harmony import */ var _components_template_form_template_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/template-form/template-form.component */ "./src/app/components/template-form/template-form.component.ts");
/* harmony import */ var _components_reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/reactive-form/reactive-form.component */ "./src/app/components/reactive-form/reactive-form.component.ts");
/* harmony import */ var _components_reactive_regist_reactive_regist_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/reactive-regist/reactive-regist.component */ "./src/app/components/reactive-regist/reactive-regist.component.ts");
/* harmony import */ var _directives_mobile_validator_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./directives/mobile-validator.directive */ "./src/app/directives/mobile-validator.directive.ts");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./directives/equal-validator.directive */ "./src/app/directives/equal-validator.directive.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_web_socket_web_socket_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/web-socket/web-socket.component */ "./src/app/components/web-socket/web-socket.component.ts");
/* harmony import */ var _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/web-socket.service */ "./src/app/shared/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 //解析的模块
 //核心模块






 //自定义模块

 //引入服务
 //引入http模块

















// ngx-quill富文本框













Object(_angular_common__WEBPACK_IMPORTED_MODULE_27__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_28___default.a);
//@NgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。@NgModule接收一个元数据对象，告诉Angular如何编译和启动应用。
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"], _components_http_http_component__WEBPACK_IMPORTED_MODULE_10__["HttpComponent"], _components_father_father_component__WEBPACK_IMPORTED_MODULE_12__["FatherComponent"], _components_child_child_component__WEBPACK_IMPORTED_MODULE_13__["ChildComponent"], _components_child2_child2_component__WEBPACK_IMPORTED_MODULE_14__["Child2Component"], _components_child3_child3_component__WEBPACK_IMPORTED_MODULE_15__["Child3Component"], _components_child4_child4_component__WEBPACK_IMPORTED_MODULE_16__["Child4Component"], _components_route1_route1_component__WEBPACK_IMPORTED_MODULE_17__["Route1Component"], _components_route2_route2_component__WEBPACK_IMPORTED_MODULE_18__["Route2Component"], _components_route3_route3_component__WEBPACK_IMPORTED_MODULE_19__["Route3Component"], _components_route4_route4_component__WEBPACK_IMPORTED_MODULE_20__["Route4Component"], _components_route5_route5_component__WEBPACK_IMPORTED_MODULE_21__["Route5Component"], _components_route5_child_route1_route5_child_route1_component__WEBPACK_IMPORTED_MODULE_22__["Route5ChildRoute1Component"], _components_route5_child_route2_route5_child_route2_component__WEBPACK_IMPORTED_MODULE_23__["Route5ChildRoute2Component"], _components_route5_child_route3_route5_child_route3_component__WEBPACK_IMPORTED_MODULE_24__["Route5ChildRoute3Component"], _components_life_life_component__WEBPACK_IMPORTED_MODULE_30__["LifeComponent"], _components_changes_changes_component__WEBPACK_IMPORTED_MODULE_31__["ChangesComponent"], _components_viewhook_viewhook_component__WEBPACK_IMPORTED_MODULE_32__["ViewhookComponent"], _components_viewhook2_viewhook2_component__WEBPACK_IMPORTED_MODULE_33__["Viewhook2Component"], _components_template_form_template_form_component__WEBPACK_IMPORTED_MODULE_34__["TemplateFormComponent"], _components_reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormComponent"], _components_reactive_regist_reactive_regist_component__WEBPACK_IMPORTED_MODULE_36__["ReactiveRegistComponent"], _directives_mobile_validator_directive__WEBPACK_IMPORTED_MODULE_37__["MobileValidatorDirective"], _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_38__["EqualValidatorDirective"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_39__["ProductComponent"], _components_web_socket_web_socket_component__WEBPACK_IMPORTED_MODULE_40__["WebSocketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientJsonpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                // HttpClientInMemoryWebApiModule.forRoot(
                //   InMemoryDataService, { dataEncapsulation: false }
                // ),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__["NgZorroAntdModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_29__["QuillModule"]
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_41__["WebSocketService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] //默认启动哪个组件
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/changes/changes.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/changes/changes.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  changes works!\n</p>\n<div>问候语：{{greeting}}</div>\n<div>姓名：{{user.name}}</div>\n<div>消息：<input type=\"text\" [(ngModel)] = 'message'></div>\n"

/***/ }),

/***/ "./src/app/components/changes/changes.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/changes/changes.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlcy9jaGFuZ2VzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/changes/changes.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/changes/changes.component.ts ***!
  \*********************************************************/
/*! exports provided: ChangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesComponent", function() { return ChangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangesComponent = /** @class */ (function () {
    function ChangesComponent() {
        this.message = '初始化消息';
    }
    ChangesComponent.prototype.ngOnInit = function () {
    };
    ChangesComponent.prototype.ngOnChanges = function (changes) {
        console.log(JSON.stringify(changes, null, 2));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChangesComponent.prototype, "greeting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangesComponent.prototype, "user", void 0);
    ChangesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changes',
            template: __webpack_require__(/*! ./changes.component.html */ "./src/app/components/changes/changes.component.html"),
            styles: [__webpack_require__(/*! ./changes.component.less */ "./src/app/components/changes/changes.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangesComponent);
    return ChangesComponent;
}());



/***/ }),

/***/ "./src/app/components/child/child.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/child/child.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  child 子组件接收父组件数据!------{{msg}} ----- {{name}}\n</p>\n"

/***/ }),

/***/ "./src/app/components/child/child.component.less":
/*!*******************************************************!*\
  !*** ./src/app/components/child/child.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hpbGQvY2hpbGQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/child/child.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/child/child.component.ts ***!
  \*****************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "msg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "name", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/components/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.less */ "./src/app/components/child/child.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/components/child2/child2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/child2/child2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  child2 子组件调用父组件方法!\n</p>\n  <button (click)=\"run()\">调用父组件方法</button>\n<br>\n  <button (click)=\"sendToParent()\">向父组件传值</button>\n"

/***/ }),

/***/ "./src/app/components/child2/child2.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/child2/child2.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hpbGQyL2NoaWxkMi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/child2/child2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/child2/child2.component.ts ***!
  \*******************************************************/
/*! exports provided: Child2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child2Component", function() { return Child2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child2Component = /** @class */ (function () {
    function Child2Component() {
        this.msg = '我是子组件数据';
    }
    Child2Component.prototype.ngOnInit = function () {
    };
    Child2Component.prototype.sendToParent = function () {
        this.getDataFromChild(this.msg);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Child2Component.prototype, "run", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Child2Component.prototype, "getDataFromChild", void 0);
    Child2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child2',
            template: __webpack_require__(/*! ./child2.component.html */ "./src/app/components/child2/child2.component.html"),
            styles: [__webpack_require__(/*! ./child2.component.less */ "./src/app/components/child2/child2.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Child2Component);
    return Child2Component;
}());



/***/ }),

/***/ "./src/app/components/child3/child3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/child3/child3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  child3 子组件通过@Output执行父组件方法\n</p>\n<button (click)=\"useParentFn()\">通过@Output执行父组件方法</button>\n"

/***/ }),

/***/ "./src/app/components/child3/child3.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/child3/child3.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hpbGQzL2NoaWxkMy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/child3/child3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/child3/child3.component.ts ***!
  \*******************************************************/
/*! exports provided: Child3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child3Component", function() { return Child3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child3Component = /** @class */ (function () {
    function Child3Component() {
        // EventEmitter实现子组件给父组件传值
        this.toParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Child3Component.prototype.ngOnInit = function () {
    };
    Child3Component.prototype.useParentFn = function () {
        this.toParent.emit('子组件的数据传给父组件，并调用父组件方法');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Child3Component.prototype, "toParent", void 0);
    Child3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child3',
            template: __webpack_require__(/*! ./child3.component.html */ "./src/app/components/child3/child3.component.html"),
            styles: [__webpack_require__(/*! ./child3.component.less */ "./src/app/components/child3/child3.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Child3Component);
    return Child3Component;
}());



/***/ }),

/***/ "./src/app/components/child4/child4.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/child4/child4.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  child4 组件!\n</p>\n"

/***/ }),

/***/ "./src/app/components/child4/child4.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/child4/child4.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hpbGQ0L2NoaWxkNC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/child4/child4.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/child4/child4.component.ts ***!
  \*******************************************************/
/*! exports provided: Child4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child4Component", function() { return Child4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child4Component = /** @class */ (function () {
    function Child4Component() {
        this.msg = '我是child4组件的数据';
    }
    Child4Component.prototype.ngOnInit = function () {
    };
    Child4Component.prototype.run = function () {
        alert('这是child4组件的方法');
    };
    Child4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child4',
            template: __webpack_require__(/*! ./child4.component.html */ "./src/app/components/child4/child4.component.html"),
            styles: [__webpack_require__(/*! ./child4.component.less */ "./src/app/components/child4/child4.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Child4Component);
    return Child4Component;
}());



/***/ }),

/***/ "./src/app/components/father/father.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/father/father.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  father 组件! ---- {{msg}}\n</p>\n<app-child [msg]=\"msg\" [name]=\"name\"></app-child>\n<app-child2 [run]=\"run\" [getDataFromChild]=\"getDataFromChild\"></app-child2>\n<app-child3 (toParent) = 'requestData($event)'></app-child3>\n<br>\n<br>\n<br>\n<p>父组件通过@ViewChild获取子组件的数据和方法</p>\n<button (click)=\"child4.run()\">父组件调用子组件方法</button>\n<button (click)=\"getChildData()\">父组件调用自己方法获取子组件数据</button>\n<app-child4 #child4></app-child4>\n"

/***/ }),

/***/ "./src/app/components/father/father.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/father/father.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF0aGVyL2ZhdGhlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/father/father.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/father/father.component.ts ***!
  \*******************************************************/
/*! exports provided: FatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatherComponent", function() { return FatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FatherComponent = /** @class */ (function () {
    function FatherComponent() {
        this.msg = '父级数据';
        this.name = '张三';
    }
    FatherComponent.prototype.ngOnInit = function () {
    };
    FatherComponent.prototype.run = function () {
        alert('这是父组件的run方法');
    };
    FatherComponent.prototype.getDataFromChild = function (childData) {
        alert(childData);
    };
    FatherComponent.prototype.requestData = function (msg) {
        alert(msg);
    };
    FatherComponent.prototype.getChildData = function () {
        alert(this.child4.msg);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('child4'),
        __metadata("design:type", Object)
    ], FatherComponent.prototype, "child4", void 0);
    FatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-father',
            template: __webpack_require__(/*! ./father.component.html */ "./src/app/components/father/father.component.html"),
            styles: [__webpack_require__(/*! ./father.component.less */ "./src/app/components/father/father.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FatherComponent);
    return FatherComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">{{title}}--{{msg}}</h2>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  color: #e43937;\n  text-align: center;\n  background-color: aliceblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDovbmdEZW1vL2FuZ3VsYXJEZW1vL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgY29sb3I6ICNlNDM5Mzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuIiwiLmhlYWRlciB7XG4gIGNvbG9yOiAjZTQzOTM3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = '这是一个头部组件';
    } //构造函数
    HeaderComponent.prototype.ngOnInit = function () {
        this.msg = '定义的消息';
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>home组件</h2>\n<button (click)=\"getMsg()\">执行方法</button>\n\n<p *ngIf=\"flag\">flag = true 显示</p>\n<button (click)=\"flag = !flag\">改变flag的值</button>\n<br>\n<input type=\"text\" (keyup)=\"keyUpFn($event)\">\n<br>\n<input type=\"text\" [(ngModel)]=\"search\" name=\"userName\">\n{{search}}\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.msg = '这是一个首页组件';
        this.flag = true;
        this.search = '搜索的内容';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getMsg = function () {
        alert(this.msg);
    };
    HomeComponent.prototype.keyUpFn = function (e) {
        console.log(e);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/http/http.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/http/http.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  http works!\n</p>\n<button (click)=\"requestData()\">请求数据</button>\n"

/***/ }),

/***/ "./src/app/components/http/http.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/http/http.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaHR0cC9odHRwLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/http/http.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/http/http.component.ts ***!
  \***************************************************/
/*! exports provided: HttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpComponent", function() { return HttpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MessageService } from './message.service';
var HttpComponent = /** @class */ (function () {
    function HttpComponent(http) {
        this.http = http;
    }
    HttpComponent.prototype.ngOnInit = function () {
        this.requestData();
    };
    HttpComponent.prototype.requestData = function () {
        this.http.get('http://jsonplaceholder.typicode.com/users/users')
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    HttpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-http',
            template: __webpack_require__(/*! ./http.component.html */ "./src/app/components/http/http.component.html"),
            styles: [__webpack_require__(/*! ./http.component.less */ "./src/app/components/http/http.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpComponent);
    return HttpComponent;
}());



/***/ }),

/***/ "./src/app/components/life/life.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/life/life.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  life works!!\n</p>\n"

/***/ }),

/***/ "./src/app/components/life/life.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/life/life.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlmZS9saWZlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/life/life.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/life/life.component.ts ***!
  \***************************************************/
/*! exports provided: LifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeComponent", function() { return LifeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var logIndex = 1;
var LifeComponent = /** @class */ (function () {
    function LifeComponent() {
        this.logIt('name属性在constructor里的值是：' + name);
    }
    LifeComponent.prototype.logIt = function (msg) {
        console.log("#" + logIndex++ + "--" + msg);
    };
    LifeComponent.prototype.ngOnInit = function () {
        this.logIt('ngOnInit');
    };
    LifeComponent.prototype.ngOnChanges = function (changes) {
        var name = changes['name'].currentValue;
        this.logIt('name属性在constructor里的值是：' + name);
    };
    LifeComponent.prototype.ngDoCheck = function () {
        this.logIt('ngDoCheck');
    };
    LifeComponent.prototype.ngAfterContentInit = function () {
        this.logIt('ngAfterContentInit');
    };
    // ngAfterContentChecked():void {
    //   this.logIt('ngAfterContentChecked');
    // }
    LifeComponent.prototype.ngAfterViewInit = function () {
        this.logIt('ngAfterViewInit');
    };
    LifeComponent.prototype.ngAfterContentChecked = function () {
        this.logIt('ngAfterContentChecked');
    };
    LifeComponent.prototype.ngOnDestroy = function () {
        this.logIt('ngOnDestroy');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LifeComponent.prototype, "name", void 0);
    LifeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-life',
            template: __webpack_require__(/*! ./life.component.html */ "./src/app/components/life/life.component.html"),
            styles: [__webpack_require__(/*! ./life.component.less */ "./src/app/components/life/life.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LifeComponent);
    return LifeComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h2>这是一个新闻组件</h2>\n{{title}}\n<br/>\n{{msg}}\n<br/>\n{{msg1}}\n<br/>\n{{userName}}\n<p id=\"{{id}}\">绑定一个属性--打开控制台查看</p>\n<p [title]=\"msg\">鼠标hover查看</p>\n<p [innerHtml] = 'h'></p>\n<p>*ngFor</p>\n<ul>\n  <li *ngFor=\"let item of list;let i = index\">{{i}}--{{item}}</li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/components/news/news.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.title = '你好angular'; //属性
        this.msg1 = '这是一个string类型的msg';
        /*
        修饰符：
        public     公有       类的内外都可以使用
        protected  受保护的   只在当前类或他的子类里面可以使用
        private    私有       只在当前类可以访问这个属性
        */
        this.userName = '张三'; //带修饰符的属性
        this.id = '123';
        this.h = '';
        this.list = [];
        this.msg = '这是另一种定义属性的方法';
        this.h = '<h2>这是新闻的标题</h2>';
        this.list = ['111', '222', '333'];
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.less */ "./src/app/components/news/news.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>商品信息</div>\n<ul>\n  <!--<li *ngFor=\"let product of products\">{{product.name}}-&#45;&#45;{{product.id}}</li>-->\n  <li *ngFor=\"let product of products | async\">{{product.name}}---{{product.id}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/product/product.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(http) {
        this.http = http;
        // =======手动调用subscribe方法订阅一个流======
        // this.dataSource = this.http.get('/api/products');
        // =======手动调用subscribe方法订阅一个流======
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Author': 'laogener' })
        };
        this.products = this.http.get('/api/products', httpOptions);
    }
    ProductComponent.prototype.ngOnInit = function () {
        // =======手动调用subscribe方法订阅一个流======
        // this.dataSource.subscribe((data) => this.products = data)
        // =======手动调用subscribe方法订阅一个流======
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.less */ "./src/app/components/product/product.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/reactive-form/reactive-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/reactive-form/reactive-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [formControl]=\"username\">\n<form [formGroup] = \"formModel\" (submit)=\"onSubmit()\">\n  <input type=\"text\" formControlName=\"username\">\n  <div formGroupName=\"dateRange\">\n    起始日期：<input type=\"date\" formControlName=\"from\">\n    截止日期：<input type=\"date\" formControlName=\"to\">\n  </div>\n  <div>\n    <ul formArrayName=\"emails\">\n      <li *ngFor=\"let e of this.formModel.get('emails').controls;let i = index;\">\n        <input type=\"text\" [formControlName]=\"i\">\n      </li>\n    </ul>\n    <button type=\"button\" (click)=\"addEmail()\">增加Email</button>\n  </div>\n  <div>\n    <button type=\"submit\">保存</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/reactive-form/reactive-form.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/reactive-form/reactive-form.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVhY3RpdmUtZm9ybS9yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/reactive-form/reactive-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/reactive-form/reactive-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent() {
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('aaa');
        this.formModel = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bbb'),
            dateRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            }),
            emails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('13231@qq.com'),
                new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('asdad@qq.com')
            ])
        });
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
    };
    ReactiveFormComponent.prototype.onSubmit = function () {
        console.log(this.formModel.value);
    };
    ReactiveFormComponent.prototype.addEmail = function () {
        var emails = this.formModel.get('emails');
        emails.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
    };
    ReactiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reactive-form',
            template: __webpack_require__(/*! ./reactive-form.component.html */ "./src/app/components/reactive-form/reactive-form.component.html"),
            styles: [__webpack_require__(/*! ./reactive-form.component.less */ "./src/app/components/reactive-form/reactive-form.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/components/reactive-regist/reactive-regist.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/reactive-regist/reactive-regist.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formModel\" (submit)=\"onSubmit()\">\n  <div>用户名：<input [class.hasError]=\"formModel.get('username').invalid && !formModel.get('username').untouched\" type=\"text\" formControlName=\"username\"></div>\n  <div [hidden]=\"formModel.get('username').valid || formModel.get('username').untouched\">\n    <div [hidden]=\"!formModel.hasError('required','username')\">用户名是必填项</div>\n    <div [hidden]=\"!formModel.hasError('minlength','username')\">用户名最小长度是6</div>\n  </div>\n\n  <div>手机号：<input type=\"text\" formControlName=\"mobile\"></div>\n  <div [hidden]=\"formModel.get('mobile').valid || formModel.get('mobile').pristine\">\n    <div [hidden]=\"!formModel.hasError('mobile','mobile')\">{{formModel.getError('mobile', 'mobile')?.info}}</div>\n  </div>\n  <div [hidden]=\"!formModel.get('mobile').pending\">正在校验手机号合法性</div>\n  <div formGroupName=\"pswGroups\">\n    <div>密码：<input type=\"password\" formControlName=\"psw\"></div>\n    <div [hidden]=\"!formModel.hasError('minlength',['pswGroups','psw'])\">密码最小长度是6</div>\n    <div>确认密码：<input type=\"password\" formControlName=\"repsw\"></div>\n    <div [hidden]=\"!formModel.hasError('equal','pswGroups') || this.formModel.get('pswGroups').get('repsw').untouched || formModel.hasError('minlength',['pswGroups','psw'])\">\n      {{formModel.getError('equal', 'pswGroups')?.info}}\n    </div>\n  </div>\n  <button type=\"submit\">注册</button>\n</form>\n<!--<div>{{formModel.status}}</div>-->\n"

/***/ }),

/***/ "./src/app/components/reactive-regist/reactive-regist.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/reactive-regist/reactive-regist.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hasError {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWFjdGl2ZS1yZWdpc3QvRDovbmdEZW1vL2FuZ3VsYXJEZW1vL3NyYy9hcHAvY29tcG9uZW50cy9yZWFjdGl2ZS1yZWdpc3QvcmVhY3RpdmUtcmVnaXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlYWN0aXZlLXJlZ2lzdC9yZWFjdGl2ZS1yZWdpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWFjdGl2ZS1yZWdpc3QvcmVhY3RpdmUtcmVnaXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhc0Vycm9ye1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iLCIuaGFzRXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/reactive-regist/reactive-regist.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/reactive-regist/reactive-regist.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReactiveRegistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveRegistComponent", function() { return ReactiveRegistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validator/validators */ "./src/app/validator/validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 导入验证组件

var ReactiveRegistComponent = /** @class */ (function () {
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
    function ReactiveRegistComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            // mobile:['',this.mobileValidator],
            // pswGroups:this.fb.group({
            //   psw:['',Validators.minLength(6)],
            //   repsw:['']
            // },{validator:this.equalValidator})
            // 导入验证组件
            // mobile:['',mobileValidator],
            mobile: ['', _validator_validators__WEBPACK_IMPORTED_MODULE_2__["mobileValidator"], _validator_validators__WEBPACK_IMPORTED_MODULE_2__["mobileAsyncValidator"]],
            pswGroups: fb.group({
                psw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)],
                repsw: ['']
            }, { validator: _validator_validators__WEBPACK_IMPORTED_MODULE_2__["equalValidator"] })
            // 导入验证组件
        });
    }
    ReactiveRegistComponent.prototype.ngOnInit = function () {
    };
    ReactiveRegistComponent.prototype.onSubmit = function () {
        var isValid = this.formModel.get('username').valid;
        console.log('username的校验结果' + isValid);
        var errors = this.formModel.get('username').errors;
        console.log('username的错误信息是' + JSON.stringify(errors));
        if (this.formModel.valid) {
            console.log(this.formModel.value);
            alert(1);
        }
    };
    ReactiveRegistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reactive-regist',
            template: __webpack_require__(/*! ./reactive-regist.component.html */ "./src/app/components/reactive-regist/reactive-regist.component.html"),
            styles: [__webpack_require__(/*! ./reactive-regist.component.less */ "./src/app/components/reactive-regist/reactive-regist.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ReactiveRegistComponent);
    return ReactiveRegistComponent;
}());



/***/ }),

/***/ "./src/app/components/route1/route1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/route1/route1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route1 组件!\n</p>\n<button (click)=\"goRoute2()\">go  route2</button>\n<p><button (click)=\"toRoute2(111,1)\">get传值1，跳转路由</button></p>\n<p><button (click)=\"toRoute2(222,2)\">get传值2，跳转路由</button></p>\n<p><button (click)=\"toRoute2(333,3)\">get传值3，跳转路由</button></p>\n"

/***/ }),

/***/ "./src/app/components/route1/route1.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/route1/route1.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGUxL3JvdXRlMS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/route1/route1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/route1/route1.component.ts ***!
  \*******************************************************/
/*! exports provided: Route1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route1Component", function() { return Route1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 引入Router;NavigationExtras  get传参

var Route1Component = /** @class */ (function () {
    function Route1Component(router) {
        this.router = router;
    }
    Route1Component.prototype.ngOnInit = function () {
    };
    Route1Component.prototype.goRoute2 = function () {
        this.router.navigate(['/route2']);
    };
    Route1Component.prototype.toRoute2 = function (id, aid) {
        // 跳转路由  get传值
        var navigationExtras = {
            queryParams: {
                'id': id,
                'aid': aid
            },
        };
        this.router.navigate(['/route2'], navigationExtras);
    };
    Route1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route1',
            template: __webpack_require__(/*! ./route1.component.html */ "./src/app/components/route1/route1.component.html"),
            styles: [__webpack_require__(/*! ./route1.component.less */ "./src/app/components/route1/route1.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Route1Component);
    return Route1Component;
}());



/***/ }),

/***/ "./src/app/components/route2/route2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/route2/route2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route2 组件!\n</p>\n"

/***/ }),

/***/ "./src/app/components/route2/route2.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/route2/route2.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGUyL3JvdXRlMi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/route2/route2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/route2/route2.component.ts ***!
  \*******************************************************/
/*! exports provided: Route2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route2Component", function() { return Route2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// ActivatedRoute接收动态传值   接收get传值

var Route2Component = /** @class */ (function () {
    function Route2Component(route) {
        this.route = route;
    }
    Route2Component.prototype.ngOnInit = function () {
        console.log(this.route.params); //获取动态路由
        console.log(this.route.queryParams); //获取get传值
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            console.log(data.id);
        });
    };
    Route2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route2',
            template: __webpack_require__(/*! ./route2.component.html */ "./src/app/components/route2/route2.component.html"),
            styles: [__webpack_require__(/*! ./route2.component.less */ "./src/app/components/route2/route2.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Route2Component);
    return Route2Component;
}());



/***/ }),

/***/ "./src/app/components/route3/route3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/route3/route3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route3 组件!\n</p>\n<p><a routerLink=\"/route4/1\" routerLinkActive=\"active\">route4组件  ---- 动态路由1</a></p>\n<p><a routerLink=\"/route4/2\" routerLinkActive=\"active\">route4组件  ---- 动态路由2</a></p>\n<p><a routerLink=\"/route4/3\" routerLinkActive=\"active\">route4组件  ---- 动态路由3</a></p>\n"

/***/ }),

/***/ "./src/app/components/route3/route3.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/route3/route3.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGUzL3JvdXRlMy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/route3/route3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/route3/route3.component.ts ***!
  \*******************************************************/
/*! exports provided: Route3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route3Component", function() { return Route3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Route3Component = /** @class */ (function () {
    function Route3Component() {
    }
    Route3Component.prototype.ngOnInit = function () {
    };
    Route3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route3',
            template: __webpack_require__(/*! ./route3.component.html */ "./src/app/components/route3/route3.component.html"),
            styles: [__webpack_require__(/*! ./route3.component.less */ "./src/app/components/route3/route3.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Route3Component);
    return Route3Component;
}());



/***/ }),

/***/ "./src/app/components/route4/route4.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/route4/route4.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route4 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/route4/route4.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/route4/route4.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGU0L3JvdXRlNC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/route4/route4.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/route4/route4.component.ts ***!
  \*******************************************************/
/*! exports provided: Route4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route4Component", function() { return Route4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 引入ActivatedRoute模块

var Route4Component = /** @class */ (function () {
    function Route4Component(route) {
        this.route = route;
    }
    Route4Component.prototype.ngOnInit = function () {
        // 获取动态路由
        console.log(this.route.params);
        this.route.paramMap.subscribe(function (data) {
            console.log(data);
            console.log(data.get('id'));
        });
    };
    Route4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route4',
            template: __webpack_require__(/*! ./route4.component.html */ "./src/app/components/route4/route4.component.html"),
            styles: [__webpack_require__(/*! ./route4.component.less */ "./src/app/components/route4/route4.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Route4Component);
    return Route4Component;
}());



/***/ }),

/***/ "./src/app/components/route5-child-route1/route5-child-route1.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/route5-child-route1/route5-child-route1.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route5-child-route1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/route5-child-route1/route5-child-route1.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/route5-child-route1/route5-child-route1.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGU1LWNoaWxkLXJvdXRlMS9yb3V0ZTUtY2hpbGQtcm91dGUxLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/route5-child-route1/route5-child-route1.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/route5-child-route1/route5-child-route1.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Route5ChildRoute1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route5ChildRoute1Component", function() { return Route5ChildRoute1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Route5ChildRoute1Component = /** @class */ (function () {
    function Route5ChildRoute1Component() {
    }
    Route5ChildRoute1Component.prototype.ngOnInit = function () {
    };
    Route5ChildRoute1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route5-child-route1',
            template: __webpack_require__(/*! ./route5-child-route1.component.html */ "./src/app/components/route5-child-route1/route5-child-route1.component.html"),
            styles: [__webpack_require__(/*! ./route5-child-route1.component.less */ "./src/app/components/route5-child-route1/route5-child-route1.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Route5ChildRoute1Component);
    return Route5ChildRoute1Component;
}());



/***/ }),

/***/ "./src/app/components/route5-child-route2/route5-child-route2.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/route5-child-route2/route5-child-route2.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route5-child-route2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/route5-child-route2/route5-child-route2.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/route5-child-route2/route5-child-route2.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGU1LWNoaWxkLXJvdXRlMi9yb3V0ZTUtY2hpbGQtcm91dGUyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/route5-child-route2/route5-child-route2.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/route5-child-route2/route5-child-route2.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Route5ChildRoute2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route5ChildRoute2Component", function() { return Route5ChildRoute2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Route5ChildRoute2Component = /** @class */ (function () {
    function Route5ChildRoute2Component() {
    }
    Route5ChildRoute2Component.prototype.ngOnInit = function () {
    };
    Route5ChildRoute2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route5-child-route2',
            template: __webpack_require__(/*! ./route5-child-route2.component.html */ "./src/app/components/route5-child-route2/route5-child-route2.component.html"),
            styles: [__webpack_require__(/*! ./route5-child-route2.component.less */ "./src/app/components/route5-child-route2/route5-child-route2.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Route5ChildRoute2Component);
    return Route5ChildRoute2Component;
}());



/***/ }),

/***/ "./src/app/components/route5-child-route3/route5-child-route3.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/route5-child-route3/route5-child-route3.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route5-child-route3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/route5-child-route3/route5-child-route3.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/route5-child-route3/route5-child-route3.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGU1LWNoaWxkLXJvdXRlMy9yb3V0ZTUtY2hpbGQtcm91dGUzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/route5-child-route3/route5-child-route3.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/route5-child-route3/route5-child-route3.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Route5ChildRoute3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route5ChildRoute3Component", function() { return Route5ChildRoute3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Route5ChildRoute3Component = /** @class */ (function () {
    function Route5ChildRoute3Component() {
    }
    Route5ChildRoute3Component.prototype.ngOnInit = function () {
    };
    Route5ChildRoute3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route5-child-route3',
            template: __webpack_require__(/*! ./route5-child-route3.component.html */ "./src/app/components/route5-child-route3/route5-child-route3.component.html"),
            styles: [__webpack_require__(/*! ./route5-child-route3.component.less */ "./src/app/components/route5-child-route3/route5-child-route3.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Route5ChildRoute3Component);
    return Route5ChildRoute3Component;
}());



/***/ }),

/***/ "./src/app/components/route5/route5.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/route5/route5.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route5 子组件!\n</p>\n<ul>\n  <li><a routerLink=\"/route5/childRoute1\" routerLinkActive=\"active\">route5 子组件1</a></li>\n  <li><a routerLink=\"/route5/childRoute2\" routerLinkActive=\"active\">route5 子组件2</a></li>\n  <li><a routerLink=\"/route5/childRoute3\" routerLinkActive=\"active\">route5 子组件3</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/route5/route5.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/route5/route5.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGU1L3JvdXRlNS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/route5/route5.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/route5/route5.component.ts ***!
  \*******************************************************/
/*! exports provided: Route5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route5Component", function() { return Route5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Route5Component = /** @class */ (function () {
    function Route5Component() {
    }
    Route5Component.prototype.ngOnInit = function () {
    };
    Route5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route5',
            template: __webpack_require__(/*! ./route5.component.html */ "./src/app/components/route5/route5.component.html"),
            styles: [__webpack_require__(/*! ./route5.component.less */ "./src/app/components/route5/route5.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Route5Component);
    return Route5Component;
}());



/***/ }),

/***/ "./src/app/components/template-form/template-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/template-form/template-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>novalidate不启用浏览器默认的属性检测，采用angular的检测（如：required）</p>\n<form #myForm=\"ngForm\" (ngSubmit) = 'onSubmit(myForm.value,myForm.valid)' novalidate>\n  <div>用户名：<input #username=\"ngModel\" required minlength=\"6\" ngModel name=\"username\" type=\"text\" (input)=\"onMobileInput(myForm)\"></div>\n  <div [hidden]=\"mobileValid || mobileUntouched\">\n    <div [hidden]=\"!myForm.form.hasError('required','username')\">用户名是必填项</div>\n    <div [hidden]=\"!myForm.form.hasError('minlength','username')\">用户名最小长度是6</div>\n  </div>\n\n  <!--<div>手机号：<input ngModel name=\"phone\" type=\"text\"></div>-->\n  <!--引入指令-->\n  <div>手机号：<input ngModel mobile name=\"mobile\" type=\"text\"></div>\n  <div [hidden]=\"!myForm.form.hasError('mobile','mobile')\">请输入正确的手机号</div>\n  <div ngModelGroup=\"pswGroups\" equal>\n    <div>密码：<input ngModel minlength=\"6\" name=\"psw\" type=\"password\"></div>\n    <div [hidden]=\"!myForm.form.hasError('minlength',['pswGroups','psw'])\">密码最小长度是6</div>\n    <div>确认密码：<input ngModel name=\"repsw\" type=\"password\"></div>\n    <div [hidden]=\"!myForm.form.hasError('equal','pswGroups') || this.myForm.form.get('pswGroups').get('repsw').untouched\">\n      {{myForm.form.getError('equal', 'pswGroups')?.info}}\n    </div>\n  </div>\n  <button type=\"submit\">注册</button>\n</form>\n<div>{{myForm.value | json}}</div>\n<div>{{username.value}}</div>\n"

/***/ }),

/***/ "./src/app/components/template-form/template-form.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/template-form/template-form.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUtZm9ybS90ZW1wbGF0ZS1mb3JtLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/template-form/template-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/template-form/template-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: TemplateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFormComponent", function() { return TemplateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateFormComponent = /** @class */ (function () {
    function TemplateFormComponent() {
        this.mobileValid = true;
        this.mobileUntouched = true;
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
    };
    TemplateFormComponent.prototype.onSubmit = function (value, valid) {
        console.log(value);
        console.log(valid);
    };
    TemplateFormComponent.prototype.onMobileInput = function (form) {
        if (form) {
            this.mobileValid = form.form.get('mobile').valid;
            this.mobileUntouched = form.form.get('mobile').untouched;
        }
    };
    TemplateFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-form',
            template: __webpack_require__(/*! ./template-form.component.html */ "./src/app/components/template-form/template-form.component.html"),
            styles: [__webpack_require__(/*! ./template-form.component.less */ "./src/app/components/template-form/template-form.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <input type=\"text\" [(ngModel)] = 'userNmae'> <button (click)=\"addData()\">增加</button>\n</p>\n<ul>\n  <li *ngFor=\"let item of list;let i = index\">\n    {{item}}\n    ---------<a href=\"javascript:;\" (click)=\"delData(i)\">删除</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //引入服务
var TodoListComponent = /** @class */ (function () {
    // public local= new StorageService();//可以引入服务，但官方不推荐
    function TodoListComponent(local) {
        this.local = local;
        this.list = [];
        this.userNmae = '';
        console.log(this.local);
        this.local.setItem('name', '李四');
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.addData = function () {
        this.list.push(this.userNmae);
    };
    TodoListComponent.prototype.delData = function (i) {
        this.list.splice(i, 1);
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.less */ "./src/app/components/todo-list/todo-list.component.less")]
        }),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/components/viewhook/viewhook.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/viewhook/viewhook.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewhook works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/viewhook/viewhook.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/viewhook/viewhook.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld2hvb2svdmlld2hvb2suY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/viewhook/viewhook.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/viewhook/viewhook.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewhookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewhookComponent", function() { return ViewhookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewhookComponent = /** @class */ (function () {
    function ViewhookComponent() {
    }
    ViewhookComponent.prototype.ngAfterViewInit = function () {
        console.log('子组件的视图初始化完毕');
    };
    ViewhookComponent.prototype.ngAfterViewChecked = function () {
        console.log('子组件的视图变更检测完毕');
    };
    ViewhookComponent.prototype.ngOnInit = function () {
    };
    ViewhookComponent.prototype.greeting = function (name) {
        console.log('Hello ' + name);
    };
    ViewhookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewhook',
            template: __webpack_require__(/*! ./viewhook.component.html */ "./src/app/components/viewhook/viewhook.component.html"),
            styles: [__webpack_require__(/*! ./viewhook.component.less */ "./src/app/components/viewhook/viewhook.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewhookComponent);
    return ViewhookComponent;
}());



/***/ }),

/***/ "./src/app/components/viewhook2/viewhook2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/viewhook2/viewhook2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h2>我是子组件</h2>\n  <ng-content select=\".header\"></ng-content>\n  <div>这个div定义在子组件中</div>\n  <ng-content select=\".footer\"></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/viewhook2/viewhook2.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/viewhook2/viewhook2.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: aquamarine;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3aG9vazIvRDovbmdEZW1vL2FuZ3VsYXJEZW1vL3NyYy9hcHAvY29tcG9uZW50cy92aWV3aG9vazIvdmlld2hvb2syLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdob29rMi92aWV3aG9vazIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWV3aG9vazIvdmlld2hvb2syLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/viewhook2/viewhook2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/viewhook2/viewhook2.component.ts ***!
  \*************************************************************/
/*! exports provided: Viewhook2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewhook2Component", function() { return Viewhook2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Viewhook2Component = /** @class */ (function () {
    function Viewhook2Component() {
    }
    Viewhook2Component.prototype.ngAfterContentInit = function () {
        console.log('子组件投影内容初始化完毕');
    };
    Viewhook2Component.prototype.ngAfterContentChecked = function () {
        console.log('子组件投影内容变更检测完毕');
    };
    Viewhook2Component.prototype.ngOnInit = function () {
    };
    Viewhook2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewhook2',
            template: __webpack_require__(/*! ./viewhook2.component.html */ "./src/app/components/viewhook2/viewhook2.component.html"),
            styles: [__webpack_require__(/*! ./viewhook2.component.less */ "./src/app/components/viewhook2/viewhook2.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], Viewhook2Component);
    return Viewhook2Component;
}());



/***/ }),

/***/ "./src/app/components/web-socket/web-socket.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/web-socket/web-socket.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"sendMessageToServer()\">向服务器发消息！</button>\n"

/***/ }),

/***/ "./src/app/components/web-socket/web-socket.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/web-socket/web-socket.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViLXNvY2tldC93ZWItc29ja2V0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/web-socket/web-socket.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/web-socket/web-socket.component.ts ***!
  \***************************************************************/
/*! exports provided: WebSocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketComponent", function() { return WebSocketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/web-socket.service */ "./src/app/shared/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketComponent = /** @class */ (function () {
    function WebSocketComponent(wsService) {
        this.wsService = wsService;
    }
    WebSocketComponent.prototype.ngOnInit = function () {
        this.wsService.createObservableSocket("ws://localhost:8085").subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('流已经结束'); });
    };
    WebSocketComponent.prototype.sendMessageToServer = function () {
        this.wsService.sendMessage('Hello from client');
    };
    WebSocketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-socket',
            template: __webpack_require__(/*! ./web-socket.component.html */ "./src/app/components/web-socket/web-socket.component.html"),
            styles: [__webpack_require__(/*! ./web-socket.component.less */ "./src/app/components/web-socket/web-socket.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])
    ], WebSocketComponent);
    return WebSocketComponent;
}());



/***/ }),

/***/ "./src/app/directives/equal-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/equal-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidatorDirective", function() { return EqualValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator/validators */ "./src/app/validator/validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective() {
    }
    EqualValidatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[equal]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useValue: _validator_validators__WEBPACK_IMPORTED_MODULE_2__["equalValidator"], multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/directives/mobile-validator.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/mobile-validator.directive.ts ***!
  \**********************************************************/
/*! exports provided: MobileValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileValidatorDirective", function() { return MobileValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator/validators */ "./src/app/validator/validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobileValidatorDirective = /** @class */ (function () {
    function MobileValidatorDirective() {
    }
    MobileValidatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mobile]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useValue: _validator_validators__WEBPACK_IMPORTED_MODULE_2__["mobileValidator"], multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], MobileValidatorDirective);
    return MobileValidatorDirective;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/web-socket.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/web-socket.service.ts ***!
  \**********************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
        });
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.send(message);
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/validator/validators.ts":
/*!*****************************************!*\
  !*** ./src/app/validator/validators.ts ***!
  \*****************************************/
/*! exports provided: mobileValidator, mobileAsyncValidator, equalValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileValidator", function() { return mobileValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileAsyncValidator", function() { return mobileAsyncValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalValidator", function() { return equalValidator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function mobileValidator(control) {
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var valid = myreq.test(control.value);
    // console.log('mobile的校验结果'+ valid);
    return valid ? null : { mobile: { info: '请输入正确的手机号' } };
}
function mobileAsyncValidator(control) {
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var valid = myreq.test(control.value);
    console.log('mobile的校验结果' + valid);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(valid ? null : { mobile: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(5000));
}
function equalValidator(group) {
    var psw = group.get('psw');
    var repsw = group.get('repsw');
    var valid = false;
    if (psw && repsw) {
        valid = (psw.value === repsw.value);
    }
    // console.log('密码校验结果'+ valid);
    return valid ? null : { equal: { info: '两次密码不一致' } };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ngDemo\angularDemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map