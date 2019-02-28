var http = require('http'),
fs = require('fs'),
base = '/Home/Html/Hello_html';
http.createServer(function (req, res) {
 pathname = base + req.url;
 console.log(pathname);
}).listen(8124);
console.log('Server web running at 8124');