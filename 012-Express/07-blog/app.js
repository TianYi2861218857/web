const express = require('express')
const app = express()
const swig = require('swig')
const mongoose = require('mongoose')

//处理静态资源
app.use(express.static('public'))  

//链接数据库
mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true,useNewUrlParser: true })
//生成数据库
const db = mongoose.connection
//连接失败
db.on('error',(err)=>{
	console.log('connect db err ...')
	throw err
})
//连接成功
db.once('open', function() {
  	console.log('connect mongodb success !!!')
})

//配置模板引擎
//1.设置缓存
//开发阶段设置不走缓存
swig.setDefaults({
	cache:false
})

//2.配置应用模板
//第一个参数时模板名称,同时也是模板文件拓展名
//第二个参数时解析模板的方法
app.engine('html',swig.renderFile)

//3.配置模板的存放目录
//第一个参数必须是views
//第二个模板存放目录
app.set('views','./views')

//4.注册模板引擎
//第一个参数必须是view engine
//第二个参数时模板名称,也就是app.engine的第一个参数
app.set('view engine','html')


//配置路由
app.use('/',require('./routers/index.js')) 


app.listen(3000,()=>console.log('sever is running in the 127.0.0.1:3000!'))