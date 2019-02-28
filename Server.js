var http = require('http');
var server = http.createServer().listen(8124);
server.on('request', function(request,response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Worlddd\n');
});
console.log('server listening on 8214');