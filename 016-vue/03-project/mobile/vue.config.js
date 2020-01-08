const path = require('path')

module.exports = {
	//配置服务
  	devServer:{
  	 	port:3003
	},
	//配置预处理样式文件
	pluginOptions: {
		'style-resources-loader': {
		  preProcessor: 'less',
		  patterns: [
			  path.resolve(__dirname, './src/assets/less/index.less')
		  ]
		}
	},
	//别名配置
	chainWebpack:config =>{
		config.resolve.alias
		.set('pages',path.resolve(__dirname,'./src/pages'))
		.set('api',path.resolve(__dirname,'./src/api'))
	}  
}