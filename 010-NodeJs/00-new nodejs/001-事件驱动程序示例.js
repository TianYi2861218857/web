/*
//引入events模块
var events = require('events');
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//绑定事件及事件处理程序
eventEmitter.on('eventName',eventHandler);

//触发事件
eventEmitter.emit('eventName');
*/

//引入events模块
var events = require('events');
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected() {
	console.log('连接成功');

	//触发data_received事件
	eventEmitter.emit('cs');
}

//绑定connection 事件处理程序
eventEmitter.on('connection',connectHandler)

eventEmitter.on('cs',function(){
	console.log('cs')
})
//使用匿名函数绑定data_received事件
// eventEmitter.on('data_received',function(){
// 	console.log('数据接收成功');
// })

//触发connection 事件
eventEmitter.emit('connection');
console.log("程序执行完毕")