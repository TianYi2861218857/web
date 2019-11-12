const express = require('express')
const app = express()

//处理静态资源
app.use(express.static('public')) 

app.all('/',(req,res,next) =>{
	console.log('always do something...')
	//使用了all之后必须调用next方法才能让程序继续执行,否则使用权一直在all中,无法进入继续下面的程序
	next()
}) 
//   /users/123/books/456
//   /users/userId/book/bookId
app.get('/users/:userId/books/:bookId',(req,res) => {
	console.log(req.params)
	res.send('params...Hello world') //一定要有返回值,不然会一直请求
})

//   /user?name=tom&age=18
app.get('/',(req,res) => {
	console.log(req.query)
	res.send('query...Hello world')
}) 
// app.post('/',(req, res) =>res.send('Got a POST request'))
// app.put('/',(req,res) =>res.send('Got a PUT request'))
// app.delete('/',(req,res) =>res.send('Got a DELETE require'))

app.listen(3000,()=>console.log('Example app listening on port 3000!'))