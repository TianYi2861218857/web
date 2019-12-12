//POST 请求
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
	/*
	//打印结果:  GET  GET POST  获取页面  图标 点击post按钮
	console.log(req.method);
	*/

	var urlStr = req.url;
	if(req.method == 'POST'){
		//处理POST请求
		var body = '';
		//监听req上面的data事件  
		//chunk 是发送过来的数据 (chunk是一个个片段)
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			//根据数据做处理....
			res.end(body);
		})
	}else if( req.method == 'GET'){
		if(urlStr == './favicon.ico'){
			res.end('favicon.ico')
		}
		var filePath = './'+urlStr;
		//readFile接受两个参数,第一个是访问文件路径,第二个是函数
		//函数内用两个参数(错误,数据)
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}else{
				res.statusCode = 404;
				res.end('not found...')
			}
		})
	} 
})

server.listen(3000,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3000');
})