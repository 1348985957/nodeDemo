var http = require("http");

//创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){
	console.log("服务器接收到了请求" + req.url);
	res.end();
});

server.listen(3000,"127.0.0.1");