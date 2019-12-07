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

server.listen(3000,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3000');
})