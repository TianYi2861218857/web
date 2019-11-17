const express = require('express')
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')  //加密方式:(哈希和hmac)

const router = express.Router()

//处理注册
router.post('/register', (req, res) => {
	//1. 获取参数信息
	const { username,password } = req.body   //body-parser这个中间件可以把post请求的所有数据放到req.body中
	// console.log(username,password)
	//2. 查找数据库同名验证
	UserModel.findOne({username:username})
	.then(user=>{
		if(user){//该用户名已经存在不能插入数据
			res.json({
				//code:失败时返回状态码(前后台的约定,不固定数值)
				code:10,
				message:'该用户名已经存在,请更换用户名'
			})
		}else{//该用户名可以插入
			UserModel.insertMany({
				username:username,
				password:hmac(password)  //密码加密
				// password:password
			})
			.then(result=>{
				res.json({
					code:0,
					message:'注册成功',
					user:result
				})
			})
			.catch(err=>{
				res.json({
					code:10,
					message:'数据库操作失败,请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'数据库操作失败,请稍后再试'
		})
	})
	//3. 插入数据
})

//处理登录
router.post('/login', (req, res) => {
	//1. 获取参数信息
	const { username,password } = req.body   //body-parser这个中间件可以把post请求的所有数据放到req.body中
	// console.log(username,password)
	//2. 查找数据库同名验证
	UserModel.findOne({username:username,password:hmac(password)},'-password')
	.then(user=>{
		if(user){//存在该用户
			//3.返回数据
			//设置cookie(同时可以设置过期时间)
			/*
				cookies后面跟上键,值和对象(设置过期时间),其中里面的值只能以字符串的形式存
			*/
			// req.cookies.set('userInfo',JSON.stringify(user),{maxAge:1000*60*60*24})

			//session可以设置对象
			req.session.userInfo = user
			res.json({
				code:0,
				message:'登录成功',
				user:user
			})
		}else{
			res.json({
				code:10,
				message:'用户名或者密码错误'
			})
		}
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'数据库操作失败,请稍后再试'
		})
	})
})

//处理退出
router.get('/logout',(req,res)=>{
	//清除cookie
	// req.cookies.set('userInfo',null)
	req.session.destroy()
	res.json({
		code:0,
		message:'退出成功'
	})
}) 
module.exports = router