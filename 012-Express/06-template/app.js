const express = require('express')
const app = express()
const swig  = require('swig');

//处理静态资源
app.use(express.static('public'))  


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

//5.渲染模板
app.get('/',(req,res)=>{
	res.render('index',{
		title:'天任教育',
		name:'leo',
		age:12,
		names:['echo','kangkang','lihua','chen']
	})
})

app.get('/list',(req,res)=>{
	res.render('list')
})


app.listen(3000,()=>console.log('Example app listening on port 3000!'))