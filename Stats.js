var fs = require('fs');
var util = require('util');
fs.stat('input.txt', function(err,stats) {
  if (err) return console.log(err);
  console.log(util.inspect(stats));
});