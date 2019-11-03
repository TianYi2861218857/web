;(function($){
	var $input = $('.list-ipt')
	$input.on('keydown',function(ev){
		if(ev.keydown == 13){
			//发送ajax请求,添加数据
			$.ajax({
				url:'/add',
				type: "post",
				dataType: 'json',
				success:function(data){
					console.log(data)
				}
				error:function(err){
					console.log(err)
				}
			})
		}
	})
})(jQuery)