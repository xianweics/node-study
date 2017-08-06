let http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200);
  res.end("萌叽叽");
}).listen(110);

console.info("萌叽叽 开启");