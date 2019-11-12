const express = require('express')
const app = express()

//处理静态资源
app.use(express.static('public')) 

app.all('/',(req,res,next) =>{
	console.log('always do something...')
	//使用了all之后必须调用next方法才能让程序继续执行,否则使用权一直在all中,无法进入继续下面的程序
	next()
}) 

//   /user?name=tom&age=18
app.get('/',(req,res) => {
	//end只能返回字符串,并且可以解析html代码,不能返回对象
	// res.end('end...Hello world')
	// res.end('<h1>I am echo</h1>') //end可以解析html代码
	// res.end('{name:"leo"}')  //end不可以直接返回对象(解决方法:将其写成字符串)
	
	//json就是用来返回对象,也可以返回字符串,但不能解析html代码片段
	/*
	res.json({
		name:"tom"
	})
	*/
	// res.json('json...hello world')
	// res.json('<h1>hello world</h1>')  //无法解析代码片段

	//send是个万金油,字符串/json对象/html代码片段都可以返回
	// res.send('send...Hello world')
}) 

app.listen(3000,()=>console.log('Example app listening on port 3000!'))