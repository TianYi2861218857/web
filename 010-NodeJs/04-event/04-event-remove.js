// emitter.off 等价于 emitter.removeListener
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const emitter = new MyEmitter();
const Listener1 = ()=>{
	console.log('触发事件1');
} 
const Listener2 = ()=>{
	console.log('触发事件2');
}
const Listener3 = ()=>{
	console.log('触发事件3');
}
emitter.on('show',Listener1);
emitter.on('show',Listener2);
emitter.on('show',Listener3);
// emitter.off('show',Listener2);
// emitter.removeListener('show',Listener3);
emitter.emit('show');