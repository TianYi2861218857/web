const express = require('express')
const app = express()

//处理静态资源
// app.use(express.static('public'))  
app.use('/static', express.static('public'))  //设置了虚拟路径

app.get('/',(req,res) =>res.send('Hello world!')) 

app.listen(3000,()=>console.log('Example app listening on port 3000!'))