const express = require('express')
const router = express.Router()
const UserModel = require('../models/user.js')

//权限验证
router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!!!</h1>')
	}
})

//显示后台管理员首页
router.get('./',(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})

//显示用户列表页