//多次导入同一个文件只会执行一次
// import './Module.js'

//写法一:
// import {a} from './Module.js'
//导出多个
// import {a,b} from './Module.js'

//写法二:
// import {a} from './Module.js'

//写法三:  import命令可以使用as关键字将输入的变量重命名。
// import {a as aa,b} from './Module.js'

//写法四:
// import {a} from './Module.js'

//写法五(注意不要带大括号): 
import a,{b} from './Module.js'


console.log('a =',a)
//原来的名称a相当于废弃了,必须使用aa
// console.log('aa =',aa)
// console.log('b =',b)
console.log('....index.js')