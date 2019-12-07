const http = require('http')
// console.log(http)

const server = http.createServer(function(req,res){
	res.end(console.log('连接成功::'))
})

console.log(server)
server.listen(3000,'127.0.0.1',function(){
	console.log("server running at http://127.0.0.1:3000")
})