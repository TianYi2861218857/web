;(function($){
//0. 点击首页
	$('.shou-cs').on('click',function(){
		//返回首页
		window.location.href = '/'
	})
//1. 登陆注册面板切换
	var $login = $('#login1')
	var $register = $('#register1')
	var $userInfo = $('#user-info')
	//1.1登陆=>注册
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//1.2注册=>登陆
	$('#go-login').on('click',function(){
		$login.show()
		$register.hide()
	})
//2. 点击注册发送请求
	$('#sub-register').on('click',function(){
		//2.1获取注册信息
		var username = $register.find("[name='username']").val()   //属性选择器
		var password = $register.find("[name='password']").val()
		var repassword = $register.find("[name='repassword']").val()
		// console.log(username)
		// console.log(password)
		// console.log(repassword)
		var $err = $register.find('.err')
		//2.2验证数据合法性
		// 用户名以字母开头的包含字母数字下划线的3-10位字符
		var userReg = /^[a-z][a-z0-9_]{2,9}$/i
		// 密码是3-6位的任意字符 
		var passwordReg = /^\w{3,6}$/
		var errMsg = ''    //-->验证的提示信息
		//验证用户名 
		//userReg上面有个test方法,返回的是布尔值
		if(!userReg.test(username)){
			errMsg = '用户名以字母开头的包含字母数字下划线的3-10位字符'
		}
		//验证密码
		else if(!passwordReg.test(password)){
			errMsg = '密码是3-6位的任意字符'
		}
		//确认密码
		else if(password != repassword){
			errMsg = '两次密码输入不一致'
		}
		//验证通过
		else {
			errMsg = ''
		}
		if(errMsg){
			$err.html(errMsg)
		}else{
			$err.html('')
			//2.3发送ajax请求
			$.ajax({
				url:'/user/register',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				//注册后前台对返回值进行相应处理
				// console.log(data)
				if(data.code == 0){//注册成功(code是状态码)
					//返回登录面板
					$('#go-login').trigger('click')
				}else{
					$err.html(data.message)
				}
			})
			.fail(function(err){
				// console.log(data)
				$err.html('请求失败,请稍后再试!!!')
			})
		}
	})
//3. 点击登录发送请求
	$('#sub-login').on('click',function(){
		//3.1获取登录信息
		var username = $login.find("[name='username']").val()   //属性选择器
		var password = $login.find("[name='password']").val()
		var repassword = $login.find("[name='repassword']").val()
		var $err = $login.find('.err')
		//2.2验证数据合法性
		// 用户名以字母开头的包含字母数字下划线的3-10位字符
		var userReg = /^[a-z][a-z0-9_]{2,9}$/i
		// 密码是3-6位的任意字符 
		var passwordReg = /^\w{3,6}$/
		var errMsg = ''    //-->验证的提示信息
		//验证用户名 
		//userReg上面有个test方法,返回的是布尔值
		if(!userReg.test(username)){
			errMsg = '用户名以字母开头的包含字母数字下划线的3-10位字符'
		}
		//验证密码
		else if(!passwordReg.test(password)){
			errMsg = '密码是3-6位的任意字符'
		}
		//验证通过
		else {
			errMsg = ''
		}
		if(errMsg){
			$err.html(errMsg)
		}else{
			$err.html('')
			//2.3发送ajax请求
			$.ajax({
				url:'/user/login',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				// console.log(data)
				if(data.code == 0){
					/*
					$userInfo.find('span').html(data.user.username)
					$userInfo.show()
					$login.hide()
					*/
					//刷新页面
					window.location.reload()
				}else{
					$err.html(data.message)
				}
			})
			.fail(function(err){
				// console.log(data)
				$err.html('请求失败,请稍后再试!!!')
			})
		}
	})
//4. 点击退出
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'get'
		})
		.done(function(data){
			// console.log(data)
			if(data.code == 0){
				//退出成功返回首页
				window.location.href = '/'
			}
		})
		.fail(function(err){
			$userInfo.find('.err').html('请求失败,请稍后再试!!!')
		})
	})
})(jQuery);