;(function($){
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
})(jQuery)