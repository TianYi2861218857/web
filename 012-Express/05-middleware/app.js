const express = require('express')
const app = express()

//处理静态资源
app.use(express.static('public'))  
app.use('/',(req,res,next) =>{
	console.log('always do something...')
	next();
}) 
//路由请求
app.get('/get',(req,res) =>res.send('get...Hello world')) 
app.post('/post',(req, res) =>res.send('Got a POST request'))
app.put('/put',(req,res) =>res.send('Got a PUT request'))
app.delete('/delete',(req,res) =>res.send('Got a DELETE require'))

app.listen(3000,()=>console.log('Example app listening on port 3000!'))