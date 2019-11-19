const express = require('express')
const router = express.Router()
const UserModel = require('../models/user.js')
const pagination = require('../util/pagination.js')

//权限验证(防止普通用户直接通过输入网址登陆管理员界面)
router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!!!</h1>')
	}
})

//显示后台管理员首页
router.get('/',(req,res)=>{
	res.render('admin/index',{
		//将用户信息传入
		userInfo:req.userInfo
	})
})

//显示用户列表页
router.get('/users',(req,res)=>{
	//获取用户信息渲染到模板

	/*分页
	 前提条件:想要显示哪一页必须知道页码,page由前台传入
	 约定: 每页显示几条数据 limit = 3
	 第一页: 显示1-3   skip(1-1)*3  //skip跳过的条数
	 第二页: 显示4-6
	 第三页: 显示7-9
	 ......
	 第page页  显示    skip(page-1)*limit
	*/
	/*
	const limit = 3
	let page = req.query.page / 1    //页码,隐式转换

	if(isNaN(page)){
		page = 1
	}
	//上一页边界控制
	if (page == 0) {
		page = 1
	}
	//如何拿到数据的总页数: 下位mongodb中的方法(UserModel.countDocuments)数据的总个数
	UserModel.countDocuments((err,count)=>{
		// console.log(count)  //数据总个数
		const pages = Math.ceil(count / limit)
		//下一页边界控制
		if (page > pages) {
			page = pages
		}
		//上面的是异步 ,下面的逻辑是同步,所以要把下面的逻辑放到上面的回调函数中
		//由于swig无法对数字进行循环遍历,因此需要在后台生成页码(list数组里对应的页码)
		let list = []
		for(let i=1;i<=pages;i++){
			list.push(i)
		}
		let skip = (page-1)*limit
		UserModel.find({},'-password -__v')
		.sort({_id:-1})
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render('admin/user_list',{
				// 以下数据传递给前台
				userInfo:req.userInfo,
				users:users,
				page:page,
				list:list,
				pages:pages
			})
		})
		.catch(err=>{
			console.log(err)
		})
	})
	*/
	const options = {
		page: req.query.page / 1,
		model: UserModel,
		query: {},
		projection:'-password -__v',
		sort: {_id:-1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/user_list',{
			// 以下数据传递给前台
			userInfo:req.userInfo,
			users:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/admin/users'
		})
	})
	.catch(err=>{
		console.log(err)
	})
})


module.exports = router
