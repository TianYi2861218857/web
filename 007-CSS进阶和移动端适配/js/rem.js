(function(win,doc){
	var oRoot = doc.getElementsByTagName('html')[0];
	var oWidth = doc.body.clientWidth || doc.documentElement.clientWidth;
	function refresh(){
		var oFsize = oWidth/10;
		oRoot.style.fontSize = oFsize+"px";
	}
	refresh();
})(window,document);
