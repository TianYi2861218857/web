//简单跨域
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req,res){
	//设置允许访问的源  ('请求头','源(请求地址)')
	// res.setHeader('Access-Control-Allow-Origin','ttp://127.0.0.1:3000')
	// res.setHeader('Access-Control-Allow-Origin','*')

	//设置允许访问响应头信息
	res.setHeader('Access-Control-Expose-Headers','Date,Connection')
	
	//设置响应头信息
	res.setHeader('Content-Type','application/x-www-form-urlencoded');
	var urlStr = req.url;
	if(req.method == 'POST'){
		//处理POST请求
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			res.end(body);
		})
	}else if( req.method == 'GET'){
		if(urlStr.search(/\?/) != -1){
			var parm = url.parse(urlStr,true).query;
			console.log(parm)  
			var json = JSON.stringify(parm);
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

server.listen(3001,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3001');
})