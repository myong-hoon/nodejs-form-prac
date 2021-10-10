var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url
        .parse(_url, true)
        .query;
    title = queryData.id;
    pathname = url
        .parse(_url, true)
        .pathname
        console
        .log(url.parse(_url, true).pathname)
    if (pathname == '/') {
        if (request.method == 'GET' && request.url == '/') {
            response.writeHead(200, {"Content-Type": "text/html"}); // 웹페이지 출력 
            fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함 
        } 
        else {
             send404Message(response); }

        }
    }
);
app.listen(3000);