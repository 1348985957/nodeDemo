var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/favicon.ico"){
		return;
	}
	//stat检测状态
	fs.stat("./album/bbb",function(err,data){
	   if (err) {
	       return console.error(err);
	   }
	   console.log(data.isDirectory());
	});
	
});

//运行服务器，监听3000端口
server.listen(3000,"127.0.0.1");