var fs = require("fs");
var stream;
stream = fs.createReadStream("Hello.html");

stream.on("data", function(data) {
  var chunk = data.toString();
  console.log(chunk);
}); 