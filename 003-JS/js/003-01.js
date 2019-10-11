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
odiv.onmouseover = function(){     
	one();
}
odiv.onmouseout = function(){
	two();
}
document.addEventListener('DOMContentLoaded',function(){
	console.log('DOMContentLoaded')
})
var input1=prompt("请输入您的银行卡号及密码");
var input2=confirm("确定给他人转账吗？");
alert (input1);