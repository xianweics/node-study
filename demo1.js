let http = require('http');

http.createServer((req, res) => {
    let result = '';
    // req.on('data', function (err, str) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     result += str;
    // });
    // req('end',function () {
    //     console.info(result);
    //     res.writeHead(200);
    //     res.end("server start");
    // })

}).listen(110);