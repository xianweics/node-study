let http=require('http'),
    url=require('url'),
    queryString=require('querystring');
function createServer() {
    http.createServer((req,res)=>{
        let urlQuery=url.parse(req.url).query;
        let qr=queryString.parse(urlQuery);
        console.info(qr);
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('server end');
    }).listen(1010);
}
createServer();