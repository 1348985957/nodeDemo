var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/favicon.ico"){
		return;
	}
	fs.mkdir("./album/aaa",function(err){
	   if (err) {
	       return console.error(err);
	   }
	   console.log("目录创建成功。");
	});
	
});

//运行服务器，监听3000端口
server.listen(3000,"127.0.0.1");