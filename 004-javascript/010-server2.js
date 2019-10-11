var http = require('http');
var fs = require('fs');
var server = http.createServer(function(reg,res){

})
server.listen(3000,'127.0.0.1',function(){
	console.log("Server running at http://127.0.0.1:3000")
})