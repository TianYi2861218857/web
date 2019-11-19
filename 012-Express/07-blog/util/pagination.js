/*
	options = {
		page: 当前显示页码
		model:  需要操作的文档模型
		query: 查询条件
		projection:显示字段信息
		sort: 排序
	}
*/

/*
函数中有异步处理,所以使用async函数
变化的部分较多,使用参数列表字段过多,因此使用对象options
*/
async function pagination(options){
	const limit = 5
	//结构解析的形式
	let { page,model,query,projection,sort } = options

	if(isNaN(page)){
		page = 1
	}
	//上一页边界控制
	if (page == 0) {
		page = 1
	}
	const count = await model.countDocuments()

	const pages = Math.ceil(count / limit)
	//下一页边界控制
	if (page > pages) {
		page = pages
	}
	if (page == 0) {
		page = 1
	}

	let list = []
	for(let i=1;i<=pages;i++){
		list.push(i)
	}
	let skip = (page-1)*limit
	const docs = await model.find(query,projection).sort(sort).skip(skip).limit(limit)
	
	//返回信息
	return {
		docs:docs,
		page:page,
		list:list,
		pages:pages
	}
}


//把pagination函数导出
module.exports = pagination