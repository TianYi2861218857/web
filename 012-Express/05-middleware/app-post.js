const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//处理静态资源
app.use(express.static('public'))  

//use是方法,
//post中间件->引入
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//post中间件
app.use('/',(req,res) =>{
	res.send(req.body)
}) 

//路由请求
// app.get('/get',(req,res) =>res.send('get...Hello world')) 
app.post('/post',(req, res) =>res.send('Got a POST request'))
// app.put('/put',(req,res) =>res.send('Got a PUT request'))
// app.delete('/delete',(req,res) =>res.send('Got a DELETE require'))

app.listen(3000,()=>console.log('Example app listening on port 3000!'))