//此为异步操作文件
const fs = require('fs')
//1
fs.open('./01-fd.text','a',(err,fd)=>{
	if(err){
		console.log('open file arr');
	}else{
		//2
		fs.write(fd,' world(arr)',(err)=>{
			if(err){
				console.log(arr);
				console.log('write file arr');
			}else{
				fs.close(fd)
			}
		})
	}
})