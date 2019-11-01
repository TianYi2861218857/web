const fs = require('fs')
//同步读文件
	/*
	//逐步操作
	//打开文件
	const fd = fs.openSync('./01-fd.text','r')
	//读取文件内容
	let buf = Buffer.alloc(100)
	//位数偏移量,  读取数据的位数,   省略数据的前几位
	fs.readSync(fd,buf,0,50,2)
	console.log(buf)
	//退出
	fs.closeSync(fd)
	//合并操作
	const buf =fs.readFileSync('./01-fd.text',{flag:'r',encoding:'utf-8'})
	console.log(buf)
	*/

//异步操作
