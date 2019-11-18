/*
	options = {
		page: 当前显示页码
		model:  
		count:  数据总条数
	}
*/

async function pagination(options){
	const limit = 3
	const { page } = options

	if(isNaN(page)){
		page = 1
	}
	//上一页边界控制
	if (page == 0) {
		page = 1
	}
	const count = UserModel.countDocuments()
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
	
	.catch(err=>{
		console.log(err)
	})
}

module.exports = router