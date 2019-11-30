//文件说明:  获取文件

const http = require('http');
//fs上有个readFile方法可以获取文件
const fs = require('fs');

const server = http.createServer(function(req,res){
	// console.log(req.url);
	const urlStr = req.url;
	const filePath = './'+urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data)
		}else{
			res.statusCode = 404;
			res.end('not found');
		}
	})
});

server.listen(3000,'127.0.0.1',function(){
	console.log('server>>>');
});