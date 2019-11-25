/*最基本的服务器
	hello world
	每次更改之后都要在控制台重启服务
*/

//调用require函数,传入参数http,得到一个对象  
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/*去除ES6语法改写*/
// const server = http.createServer((req, res) => {

/*
//调用http上的createServer方法,得到一个服务实例(后台服务),服务接收一个参数
//这个函数处理前台发送过来的请求
const server = http.createServer();

req: 用来传递请求有关的参数
res: 用来传递相应有关的参数
end() 向前台返回内容
*/
const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


//调用实例server上的listen方法,用来监听服务是否启动,有三个参数: 端口号,服务器要起的地址(会自动在地址前加上协议 http:// ),回调函数
server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Server running at http://"+hostname+":"+port+"/");
});