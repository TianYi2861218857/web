const express = require('express')
const app = express()

//处理静态资源
// app.use(express.static('public'))
//所有的静态资源放在public文件夹中,写了处理静态资源的语句后,在访问根目录的时候会在public文件夹中寻找index.html文件
app.use('/static', express.static('public'))  //设置了虚拟路径

app.get('/',(req,res) =>res.send('Hello world!')) 

app.listen(3000,()=>console.log('Example app listening on port 3000!'))