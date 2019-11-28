

//写法一:
// export const a = 1
// export const b = 1

//写法二:
// const a =1
// export {a}

/*//写法三:
const a =1
const b =2
export {
	a,
	b
}
*/

/*//写法四:
const a =1
const b =2
export {
	a as aa,
	b
}
*/

//写法五:
//(导出默认值(只能导出一个))
// export default 1
// export default 2
// 或者
//export default const a=1 //会报错,export default后面只能跟值,不能再定义变量
export const b = 1
const a=11
export default a

console.log('...module.js')