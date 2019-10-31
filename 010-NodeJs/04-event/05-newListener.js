const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const emitter = new MyEmitter();
emitter.on('newListener',(eventName,callback)=>{
	console.log('newListener again');
});
emitter.emit('newListener');