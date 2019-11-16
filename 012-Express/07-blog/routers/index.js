const express = require('express')
const router = express.Router()

//显示首页
router.get('/', (req, res) => {
	//获取cookie信息并返回给模板
	// req.cookies.get('userInfo')  //此时cookies保存的是信息是字符串形式,需要将其变为对象形式
	/*
	let userInfo = {}
	if (req.cookies.get('userInfo')) {
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	res.render('main/index',{
		userInfo:req.userInfo
	}) 
})
//显示列表页
router.get('/list', (req, res) => {
	res.render('main/list',{
		userInfo:req.userInfo
	}) 
})
//显示详情页
router.get('/detail', (req, res) => {
	res.render('main/detail',{
		userInfo:req.userInfo
	}) 
})


module.exports = router