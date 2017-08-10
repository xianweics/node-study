let buf=new Buffer(4);
let buf1=new Buffer(4);
buf.write('buf ');
buf1.write('buf1');
// console.info(buf.toJSON());
let buf2=Buffer.concat([buf,buf1]);
console.info(buf2.length);
