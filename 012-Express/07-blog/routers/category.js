const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')

//权限验证(防止普通用户直接通过输入网址登陆管理员界面)
router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!!!</h1>')
	}
})

//显示分类列表页面
router.get('/',(req,res)=>{
	res.render('admin/category_list',{
		//将用户信息传入
		userInfo:req.userInfo
	})
})
//显示新增分类首页
router.get('/add', (req, res) => {
	res.render('admin/category_add',{
		userInfo:req.userInfo
	})
})
//处理新增分类
router.post('/add',(req,res)=>{
	//1. 获取参数
	const { name,order } = req.body
	//2. 查找数据库进行同名验证
	CategoryModel.findOne({name:name})
	.then(category=>{
		if(category){//该分类名称已经存在
			// res.send('err')
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'该分类名称已经存在'
			})
		}else{//可以插入该分类名称
			//3. 插入数据
			CategoryModel.insertMany({name,order})
			.then(result=>{
				// res.send('ok')
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'新增分类成功',
					url:'/category'
				})
			})
			.catch(err=>{
				console.log(err)
				// res.send('err')
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'数据库操作失败,请稍后再试!!!'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err)
		// res.send(err)
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败,请稍后再试!!!'
		})
	})
	
})

module.exports = router
