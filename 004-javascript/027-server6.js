//封装函数
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req,res){
	var urlStr = req.url;
	if(req.method == 'POST'){
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			res.end(body);
		})
	}else if( req.method == 'GET'){
		//GET请求传参
		//search方法  在字符串中搜索(因为?是特色字符,所以需要转义),如果等于 -1代表没有(?)
		if(urlStr.search(/\?/) != -1){
			//url模块(也就是个对象)上有个parse方法, parse方法上有个query属性,query的值就是传入的值(即对象{name:'tom'})
			var parm = url.parse(urlStr,true).query;
			console.log(parm)   //对象: {name: tom}
			var json = JSON.stringify(parm);
			res.end(json);
		}
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