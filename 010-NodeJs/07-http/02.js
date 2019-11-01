const http = require('http');
// 创建 HTTP 隧道代理。
const server = http.createServer((req, res) => {
  res.write('hello ')
  res.end('响应内容');
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1')
	const filePath = req.url 
	const filename = path.
})