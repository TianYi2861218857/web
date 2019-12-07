/* 可以读取文件
*/
const http = require('http');

//fs模块上有个readFile方法,获取文件
const fs = require('fs');

const server = http.createServer(function(req,res){
	//通过req.url  拿到前台要请求的文件
	// console.log(req.url);
	var urlStr = req.url;
	//访问文件路径(在当前文件下访问请求的文件)
	var filePath = './'+urlStr;
	//readFile接受两个参数,第一个是访问文件路径,第二个是函数
	//函数内用两个参数(错误,数据)
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			//返回的状态码
			res.statusCode = 404;
			res.end('not found...')
		}
	})
})

//  127.0.0.1  是本机地址
server.listen(3000,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3000/');
})