//GET 请求传参
const http = require('http');
const fs = require('fs');
const url = require('url');

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
		// console.log(urlStr)  //http://127.0.0.1:3000/?name:tom
		//search方法  在字符串中搜索(因为?是特色字符,所以需要转义),如果等于 -1代表没有(?)
		if(urlStr.search(/\?/) != -1){
			//url模块(也就是个对象)上有个parse方法, parse方法上有个query属性,query的值就是传入的值(即对象{name:'tom'})
			var parm = url.parse(urlStr,true).query;
			console.log(parm)  //对象: {name: tom}
			//根据情况做处理...
			//对象不能在前后台之间传输
			var json = JSON.stringify(parm);  //js对象转JSON
			res.end(json);
		}
		if(urlStr == './favicon.ico'){
			res.end('favicon.ico')
		}
		var filePath = './'+urlStr;
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