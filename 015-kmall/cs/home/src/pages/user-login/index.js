require('pages/common/logo')
require('pages/common/footer')
require('./index.css')


var _util = require('util')
var api = require('api')

var formErr ={
	//显示
	show:function(msg){
		$('.error-item').show()
		$('.error-item')
		.find('.error-msg')
		.text(msg)
	},
	//隐藏
	hide:function(){
		$('.error-item').hide()
		$('.error-item')
		.find('.error-msg')
		.text('')
	}
}

var page = {
	init:function(){
		this.bindEvent()
	},
	bindEvent:function(){
		var _this = this
		$('#btn-submit').on('click',function(){
			_this.submit()
		})
		//监听键盘事件,回车键提交数据
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
	},
	//提交功能
	submit:function(){
		//1.获取表单数据
		var formData = {
			//属性选择器(trim省略空格)
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
		}
		//2.验证数据合法性
		var formDataValidate = this.validate(formData)
		// console.log(formDataValidate)
		//3.验证通过,发送ajax请求
		if(formDataValidate.status){
			formErr.hide()
			//发送ajax请求
			api.login({
				data:formData,
				success:function(data){
					window.location.href = '/'
				},
				error:function(msg){
					formErr.show(msg)
				}
			})
		}else{//验证不通过,错误提示
			formErr.show(formDataValidate.msg)
		}
	},
	//验证数据合法性
	validate:function(formData){
		var result ={
			//status:false代表验证不通过,msg为错误提示
			status:false,
			msg:''
		}
		//验证
		//用户名不能为空
		if(!_util.validate(formData.username,'required')){
			result.msg = '用户名不能为空'
			return result
		}
		//验证用户名格式
		if(!_util.validate(formData.username,'username')){
			result.msg = '用户名格式不正确'
			return result
		}
		//密码不能为空
		if(!_util.validate(formData.password,'required')){
			result.msg = '密码不能为空'
			return result
		}
		//验证密码格式
		if(!_util.validate(formData.password,'password')){
			result.msg = '密码格式不正确'
			return result
		}
		result.status = true
		return result
	}
}

$(function(){
	page.init()
})