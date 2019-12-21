var nav = require('pages/common/nav')
require('pages/common/search')
require('pages/common/side')
// var _side = require('pages/common/side')
require('pages/common/footer')
require('./index.css')


var page = {
	init:function(){
		// this.renderSide()
	},
	// renderSide:function(){
	// 	_side.render('user-center')
	// }
}

$(function(){
	page.init()
})