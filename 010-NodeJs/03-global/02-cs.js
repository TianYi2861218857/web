setImmediate(function(){
	console.log('Immediate');
})
console.log('Immediate');

process.nextTick(() => {
	console.log(next)
})

setTimeout(function(){
	console.log('Timeout');
},0)
console.log('after Timeout');

setInterval(function(){
	console.log('Interval');
},0)
console.log('after Interval');
