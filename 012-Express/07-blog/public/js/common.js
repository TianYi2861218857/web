;(function($){
	//登陆注册面板切换
	var $login = $('#login1')
	var $register = $('#register1')
	//1.1登陆=>注册
	$('go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//1.1注册=>登陆
	$('go-login').on('click',function(){
		$login.show()
		$register.hide()
	})
})(jQuery)