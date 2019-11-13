const express = require('express')   //引入express
const app = express()     //express其实就是一个方法,创建app为express的实例

//路由请求方法   get => 127.0.0.1:3000/
//get后面的第一项是路由地址,第二项是根据请求地址做的响应
app.get('/',(req,res) =>res.send('Hello world!'))  
app.listen(3000,()=>console.log('Example app listening on port 3000!'))