const express = require('express')
const app = express()

//路由请求方法   get => 127.0.0.1:3000/
app.get('/',(req,res) =>res.send('Hello world!'))
app.listen(3000,()=>console.log('Example app listening on port 3000!'))