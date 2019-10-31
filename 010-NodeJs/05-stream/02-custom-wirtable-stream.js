const {Writable} =require('stream');
class CustomStream extends Writable{
	_write(chunk,encoding,callback){
		console.log('chunk',chunk);
		console.log('encoding',encoding);
		callback();
	}
}
const write = new CustomStream()
write.on('finish',()=>{
	console.log('finish');
});
write.write('hello',()=>{
	console.log('hello');
});
write.end('a');
