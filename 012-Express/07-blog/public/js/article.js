;(function($){
	ClassicEditor
    .create( document.querySelector( '#content' ), {
        language:'zh-cn',
        //后台存放图片的路由
        ckfinder:{
			uploadUrl:'/article/uploadImg'
		}
    } )
    .catch( error => {
        console.log( error );
    })
})(jQuery);