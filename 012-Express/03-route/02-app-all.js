const express = require('express')
const app = express()

//处理静态资源
app.use(express.static('public')) 

app.all('/',(req,res,next) =>{
	console.log('always do something...')
	//使用了all之后必须调用next方法才能让程序继续执行,否则使用权一直在all中,无法进入继续下面的程序
	next();
}) 

app.get('/',(req,res) =>res.send('get...Hello world')) 
app.post('/',(req, res) =>res.send('Got a POST request'))
app.put('/',(req,res) =>res.send('Got a PUT request'))
app.delete('/',(req,res) =>res.send('Got a DELETE require'))

app.listen(3000,()=>console.log('Example app listening on port 3000!'))