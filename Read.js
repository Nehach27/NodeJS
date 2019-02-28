var http = require('http'),
fs = require('fs'),
base = '/home/vinisaxena/Html';
http.createServer(function (req, res) {
  pathname = base + req.url;
  console.log(pathname);

  res.setHeader('Content-Type', 'test/html');
// create and pipe readable stream
var file = fs.createReadStream(pathname);
file.on("open", function() {
// 200 status - found, no errors
res.statusCode = 200;
file.pipe(res);
});

file.on("error", function(err) {
  res.writeHead(403);
  res.write('file missing, or permission problem');
  console.log(err);
});

}).listen(4444);
console.log('Server web running at 4444');