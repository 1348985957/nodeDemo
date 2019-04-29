var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/fang"){
		fs.readFile("./test.html",function(err,data){
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/yuan"){
		fs.readFile("./yuan.html",function(err,data){
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if (req.url == "/0.png") {
		fs.readFile("./0.png",function(err,data){
			res.writeHead(200,{"Content-type":"image/png"});
			res.end(data);
		});
	}else if (req.url == "/1.css") {
		fs.readFile("./css.css",function(err,data){
			res.writeHead(200,{"Content-type":"text/css"});
			res.end(data);
		});
	}else{
		res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
		res.end("该页面不存在");
	}
});

server.listen(3000,"127.0.0.1");