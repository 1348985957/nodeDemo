var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/favicon.ico"){
		return;
	}
	//存储所有的文件夹
	var wenjianjia = [];
	fs.readdir("./album",function(err,files){
	   if (err) {
	       return console.error(err);
	   }
	   //files是个数组，包含文件、文件夹
	   for(var i = 0; i < files.length; i++){
	   		var thefilename = files[i];
	   		fs.stat("./album/" + thefilename,function(err,status){
	   			if(status.isDirectory()){
	   				wenjianjia.push(thefilename);
	   			}
	   			console.log(wenjianjia);
	   		});
	   }
	});
});

//运行服务器，监听3000端口
server.listen(3000,"127.0.0.1");