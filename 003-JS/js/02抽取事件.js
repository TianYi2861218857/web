function one(){
	var odiv=document.getElementById('box');
	odiv.style.background='#f0f';
	odiv.style.width='200px';
	odiv.style.height='200px';
}
function two(){
	var odiv=document.getElementById('box');
	odiv.style.background='rgba(0,0,0,0)';
	odiv.style.width='100px';
	odiv.style.height='100px';
}
var odiv=document.getElementById('box');

// odiv.onmouseover = one;
// odiv.onmouseout = two;
//匿名函数：就是没有名字的函数
odiv.onmouseover = function(){     
	one();
}
odiv.onmouseout = function(){
	two();
}
document.addEventListener('DOMContentLoaded',function(){
	console.log('DOMContentLoaded')
})
