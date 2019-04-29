var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/favicon.ico"){
		return;
	}
	fs.readdir("./album",function(err,files){
	   if (err) {
	       return console.error(err);
	   }
	   //存储所有的文件夹
		var wenjianjia = [];
		//迭代器就是强行把异步的函数，变成同步的函数
		(function iterator(i){
			//遍历结束
			if(i == files.length){
				console.log(wenjianjia);
				return;
			}
			fs.stat("./album/" + files[i],function(err,stats){
				//检测成功之后做的事情
				if(stats.isDirectory()){
					//如果放的是文件夹，则放入数组
					wenjianjia.push(files[i]);
				}
				iterator(i+1);
			});
		})(0);
	});
	res.end();
});

//运行服务器，监听3000端口
server.listen(3000,"127.0.0.1");