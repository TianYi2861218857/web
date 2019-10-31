const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const emitter = new MyEmitter();
emitter.on('show',(agr1,agr2)=>{
	console.log(agr1,agr2);
});
emitter.on('show',()=>{
	console.log('触发事件');
});
emitter.emit('show','aa','bb');