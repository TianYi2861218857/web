//文件说明: 基本请求
const http = require('http');

const server = http.createServer(function(req,res){
	//改变状态码
	res.statusCode = 200;
	//设置请求头
    res.setHeader('Content-Type', 'text/plain');
    //向前台返回内容
    res.end('hello world - cs>>>>>>');
})
//调用server的listen 方法来监听,监听服务是否启动成功
//传入三个参数,分别是端口号,请求地址,回调函数
server.listen(3000,'127.0.0.1',function(){
	console.log('server...');
})