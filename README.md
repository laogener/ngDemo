1.全局安装Angular CLI：npm install -g @angular/cli  
2.要创建新工作区和初始应用程序项目：ng new my-app  
3.启动服务器：  
cd my-app  
ng serve --open  
4.创建组件:ng generate component 路径/组件名  
5.创建一个服务:ng generate service  路径/组件名(ng generate service services/storage)  
6.创建指令类文件:ng generate directive 路径/组件名  
7.路由:  
ng generate module app-routing --flat --module=app  
--flat放入文件src/app而不是自己的文件夹。  
--module=app告诉CLI将其注册到imports数组中AppModule。  

8.不需要配置代理，直接写全路径就可以：  
this.http.get('http://jsonplaceholder.typicode.com/users/users')  
9.typescript语言开发服务器，引入typescript类型定义文件： npm i @types/node --save
10.配置代理：
第一步：创建proxy.conf.json文件  
第二步：package.json文件 -->  "start": "ng serve --proxy-config proxy.conf.json"  
第三步：url前加'/api'   
11.node服务器启动：node  路径/文件名 
12.nodemon 用来监视node.js应用程序中的任何更改并自动重启服务,非常适合用在开发环境中。
13.Angular6 http 结合rxjs 向后台请求数据在文件product.component.ts内;设置请求头  
14.websocket服务：auction_server.js;web-socket.component.ts两个文件  
15.ng build   将Angular应用程序编译到给定输出路径中名为dist /的输出目录中   
16.部署代码：  
第一步：app.module.ts 的providers里面添加{provide:LocationStrategy,useClass:HashLocationStrategy}，用于从浏览器 URL           中读取路由状态  
第二步：ng build打包代码  
第三步：在服务器创建一个文件夹（client），包打包后的代码放入其中  
第四步：在服务端代码文件(auction_server.js)中配置默认打开文件的路径  
17.多环境（生产、开发、测试）:配置呢绒在angular.json，environments文件夹，main.ts三个地方；environment.ts里面有详细说明  



