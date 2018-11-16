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

