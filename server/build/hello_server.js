var http = require('http');
var server = http.createServer((request,response) => {
    response.end('Hello Node!');
});
server.listen(8000);