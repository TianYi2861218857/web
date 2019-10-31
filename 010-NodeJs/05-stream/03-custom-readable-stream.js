const {Readable} =require('stream');
class CustomReadable extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;
		if(this.index<5){
			this.push(this.index+"")
		}else{
			this.push(null);
		}
	}
}
const reader = new CustomReadable()
//获取数据过程
//1.定义一个变量存储数据
let body = ''
//2.
reader.on('data',(chunk)=>{
	console.log(chunk);
	body += chunk;
});
reader.on('end',()=>{
	console.log(body);
});
