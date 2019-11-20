const express = require('express')
const app = express()
const swig = require('swig')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Cookies = require('cookies')
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);

//处理静态资源
app.use(express.static('public'))  

/*-----------------处理post请求获取参数的中间件配置-------------*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 配置中间件信息后post的参数会被存在req.body
/*-----------------处理post请求获取参数的中间件配置-------------*/

/*----------------连接数据库开始-------------*/
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
/*----------------连接数据库结束-------------*/


/*------------------配置模板引擎开始----------------*/
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
/*------------------配置模板引擎结束----------------*/

/*------------------配置cookies保存用户状态信息开始----------------*/
/*
app.use((req,res,next)=>{
	//生成cookies对象并存在req上-->(在路由中接收的有req和res对象,存在上面只有有路由匹配都可以在req上拿到cookies)
	req.cookies = new Cookies(req,res)
	let userInfo = {}
	if (req.cookies.get('userInfo')) {
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	req.userInfo = userInfo
	next()
})
*/
//session模板,以后可以直接套用
app.use(session({
    //设置cookie名称
    name:'tyid',
    //用它来对session cookie签名，防止篡改
    secret:'abc',
    //强制保存session即使它并没有变化
    resave: true,
    //强制将未初始化的session存储
    saveUninitialized: true, 
    //如果为true,则每次请求都更新cookie的过期时间
    rolling:true,
    //cookie过期时间 1天
    cookie:{maxAge:1000*60*60*24},
    //设置session存储在数据库中
    store:new MongoStore({ mongooseConnection: mongoose.connection })   
}))

app.use((req,res,next)=>{
	//获取并将cookies信息存在req.userInfo上
	req.userInfo = req.session.userInfo || {}
	 
	next()
})
/*------------------配置cookies保存用户状态信息结束----------------*/

/*------------------配置路由开始----------------*/
app.use('/',require('./routers/index.js')) 
app.use('/user',require('./routers/user.js')) 
app.use('/admin',require('./routers/admin.js')) 
app.use('/category',require('./routers/category.js')) 
app.use('/article',require('./routers/article.js')) 
/*------------------配置路由结束----------------*/

app.listen(3000,()=>console.log('sever is running in the 127.0.0.1:3000!'))