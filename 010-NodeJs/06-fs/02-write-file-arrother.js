//此为异步操作文件
const fs = require('fs')
//1
fs.open('./01-txt.text','a',(err,txt)=>{
	if(err){
		console.log('open file arr');
	}else{
		//2
		fs.write(txt,' world(arr)',(err)=>{
			if(err){
				console.log(arr);
				console.log('write file arr');
			}else{
				fs.close(txt)
			}
		})
	}
})