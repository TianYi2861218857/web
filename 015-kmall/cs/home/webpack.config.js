const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //css单独打包

const getHtmlConfit = (name,title)=>({
	template:'./src/views/'+name+'.html',//模板文件
	title:title,
    filename:name+'.html',//输出的文件名
   	// inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:[name,'common']
})

module.exports = {
	//指定开发环境
	mode: "development", // "production" | "development" | "none"
	// mode: "production", // "production" | "development" | "none"

	// 这里应用程序开始执行
  	// webpack 开始打包
  	//单一入口
	// entry: "./src/index.js",
	//多入口
	entry:{
		'common':'./src/pages/common',
		'index':'./src/pages/index',
		'list':'./src/pages/list',
		'user-login':'./src/pages/user-login',
		'user-register':'./src/pages/user-register',
		'result':'./src/pages/result',
		'user-center':'./src/pages/user-center',
	},
	//输出
	output: {// webpack 如何输出结果的相关选项
		// 所有输出文件的目标路径
   		// 必须是绝对路径（使用 Node.js 的 path 模块）
		path: path.resolve(__dirname, "dist"), // string

		// 「入口分块(entry chunk)」的文件名模板（出口分块？）
		filename: "js/[name]-[hash]-bundle.js", // string  
		//配置静态资源路径
		publicPath:'/' 
	},
	//配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),//
            util:path.resolve(__dirname,'./src/util'),
            common:path.resolve(__dirname,'./src/common'),
            api:path.resolve(__dirname,'./src/api'),
            node_modules:path.resolve(__dirname,'./node_modules'),
            // service:path.resolve(__dirname,'./src/service'),
        }
    },
	module: {
	    rules: [
	      //处理CSS
	      {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },
	      //处理图片资源
	      {
			test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)\??.*$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 400,
			      			name:'resource/[name].[ext]'
			    		}
			  		}
				]
			},
			//配置babel
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            // presets: ['env', 'react'],
			            presets: ['env','es2015','stage-3'],
			        }
			    }               
			},
	    ]
	 },
	plugins:[ 
		//自动生成HTML
	    new htmlWebpackPlugin(getHtmlConfit('index','首页')),
	    new htmlWebpackPlugin(getHtmlConfit('list','列表页')),
	    new htmlWebpackPlugin(getHtmlConfit('user-login','用户登录')),
	    new htmlWebpackPlugin(getHtmlConfit('user-register','用户注册')),
	    new htmlWebpackPlugin(getHtmlConfit('result','结果页')),
	    new htmlWebpackPlugin(getHtmlConfit('user-center','个人中心')),
	    //自动清理多余文件
	    new CleanWebpackPlugin(),
	    //css单独打包
	    new MiniCssExtractPlugin({
	    	filename: "css/[name]-[hash]-bundle.css", 
	    })
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:3002,//服务运行的端口,
	    // 解决前台用户登录及注册的跨域问题
	    proxy: [{
	      	context: ['/sessions','/users'],//以xx('/sessions')开始的地址全部代理到target下的地址
	      	target: 'http://127.0.0.1:3000',
	    }]
	}
}