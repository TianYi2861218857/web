//全局对象 (window此时不是全局对象)
// console.log(global)

//利用global可以在模块中传值:
//(在m3.js中的str,  如果m4使用的话需要引入)
global.str = 'hello world'