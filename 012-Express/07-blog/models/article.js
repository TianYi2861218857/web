const mongoose = require('mongoose')


//1.定义文档模型
	const ArticleSchema = new mongoose.Schema({
		//标题
	  	title:{
	  		type:String
	  	},
	  	//简介
	  	intro:{
	  		type:String
	  	},
	  	//发布者
	  	user:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'user'
	  	},
	  	//分类
	  	category:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'category'
	  	},
	  	//时间
	  	/*
	  	createTime:{
	  		type:Date,
	  		default:Date.now
	  	}
	  	*/
	  	createdAt:{
	  		type:Date,
	  		default:Date.now
	  	},
	  	//点击量
	  	click:{
	  		type:Number,
	  		default:0
	  	},
	  	//内容
	  	content:{
	  		type:String
	  	}
	})


//2.根据文档模型生成对应模型(集合)
//2.1第一个参数就是需要生成的集合名称,mongoose子自动将集合名称转化为复数
//2.2第二个参数就是前面定义的文档模型
const ArticleModel = mongoose.model('article', ArticleSchema)


module.exports = ArticleModel