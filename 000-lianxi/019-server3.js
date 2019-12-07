const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
	var urlcs= req.url
	var filePath = './'+urlcs
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data)
		}else{
			res.statusCode =404;
			res.end("not found")
		}
	})
})

server.listen(3000,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3000')
})