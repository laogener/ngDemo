var express = require('express');

var Server = require('ws').Server;

// 文件路径模块
var path = require('path');

var app = express();
var arr = [
    {'name':'product1',id:1},
    {'name':'product2',id:2},
    {'name':'product3',id:3},
    {'name':'product4',id:4}
];

// 代码部署到服务器前
// app.get('/',(req,res) => {
//     res.send('Hello Express');
// });

// 代码部署到服务器后
app.use('/',express.static(path.join(__dirname,'..','client')));


app.get('/api/products',(req,res) => {
    // res.send('接收到商品查询请求!')
    res.json(arr);
});
app.get('/api/product/:id',(req,res) => {
    res.json(arr.find((products) =>products.id == req.params.id));
});
var server = app.listen(8000,'localhost',() => {
    console.log('服务器已经启动，地址是：http://localhost:8000')
});


const wsServer = new Server({port:8085});
wsServer.on('connection',websocket => {
    websocket.send('这个是消息服务器主动推送的');
    websocket.on('message',message => {
        console.log('接收到消息：'+ message)
    });
});
setInterval(() => {
    if(wsServer.clients){
        wsServer.clients.forEach(client => {
            client.send('这是定时推送');
        })
    }
},2000);