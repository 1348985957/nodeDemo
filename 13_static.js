var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
	//得到用户的路径
	var pathname = url.parse(req.url).pathname;
	if(pathname == "/"){
		pathname = "/index.html";
	}
	fs.readFile("./static/" + pathname,function(err,data){
		if(err){
			fs.readFile("./static/404.html",function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=utf8"});
				res.end(data);
			});
			return;
		}
		//MIME类型
		res.writeHead(200,{"Content-type":""});
		res.end(data);
	});
}).listen(3000,"127.0.0.1");