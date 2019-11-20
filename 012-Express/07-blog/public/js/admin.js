;(function($){
	$('.del').on('click',function(){
		//弹出框(取消时返回false来阻止默认行为)
		if (!window.confirm('确定要删除该条数据吗?')){
			return false
		}
		
	})
})(jQuery);