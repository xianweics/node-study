let http = require('http');
let querystring =require('querystring');
http.createServer(function (req, res) {
  res.writeHead(200,{
    'Content-Type':'text/plain;charset=utf-8'
  });
  let result = '';
  req.on('data', function (str) {
      result += str;
  });
  req.on('end',function () {
      console.info(querystring.parse(result));
  });
  res.end("server start");
}).listen(1100);
console.info('server is start')