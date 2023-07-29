// http module use for handle request and response on server
const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>hello this is jeet sharma.</h1>")
    resp.end();
}).listen(4500);