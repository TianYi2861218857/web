//导出个对象,对象跟的就是配置项信息
//nodejs中的核心模块
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');    
const {CleanWebpackPlugin} = require('clean-webpack-plugin');  //还是个类,新加的,必须要用结构解析

module.exports = {
	//指定开发环境
	mode: "production", // "production" | "development" | "none"

	// 这里应用程序开始执行(入口)
    // webpack 开始打包
    //单一入口
	entry: "./src/index.js", // string | object | array
	//多入口(chunk名称:入口文件路径)
	// entry: {
	// 	index: "./src/pages/index/index.js",
	// 	common: "./src/pages/common/common.js",
	// },

	//webpack 如何输出结果的相关选项(出口)
	output: {
		// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块）
		path: path.resolve(__dirname, "dist"), // string

		// 「入口分块(entry chunk)」的文件名模板（出口分块？）
		//单个出口
		// filename: "bundle.js" // string    
		//多出口
		filename: "[name]-[hash]-bundle.js"
	}, 
	module: {
	    rules: [
	        //处理css
		    {
		      test: /\.css$/,
		      use: [
		        'style-loader',
		        'css-loader'
		      ]
		    },
		    //处理图片
		    {
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 10
			    		}
			  		}
				]
			},
			//配置babel
			//Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            presets: ['env', 'react']
			        }
			    }               
			}		 
	    ]
	},
	plugins:[
		//自动生成HTML
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true//给生成的js/css文件添加一个唯一的hash
	        // chunks: ['index']     //只打包index文件
	    }),
	    //自动清除无用输出文件
	    new CleanWebpackPlugin()
	],
	//实时更新加载页面
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:8080//服务运行的端口(端口可以自己更改)
	}
};