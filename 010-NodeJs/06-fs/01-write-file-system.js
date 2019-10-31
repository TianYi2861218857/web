//此为同步操作文件
/*
	a:追加;  打开文件用于追加,如果文件不存在就创建
	w:写入;  打开文件用于写入,如果文件不存在就创建,存在就截断
*/
const fs = require('fs')
/*
//1.打开文件
const txt = fs.openSync('./01-txt.text','a')
//2.写入内容
fs.writeSync(txt,' world')
//3.保存并退出
fs.closeSync(txt)
*/
//合并操作
fs.writeFileSync('./01-txt.text',' world',{flag:'a'})
