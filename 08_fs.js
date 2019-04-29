var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/favicon.ico"){
		return;
	}
	var userid = parseInt(Math.random() * 89999) + 10000;
	console.log("欢迎" + userid);
	//给用户一个五位数的id
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	fs.readFile("./1.html",function(err,data){
		if(err){
			throw err;
		}
		console.log(userid + "文件读取完毕");
		res.end(data);
	});
});

//运行服务器，监听3000端口
server.listen(3000,"127.0.0.1");