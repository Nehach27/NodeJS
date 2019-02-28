var buf1 = new Buffer('this is the way we build our buffer');
console.log("Buffer1: " + buf1);

var lnth = buf1.length;
console.log("Buffer1 length: " + lnth);

// create new buffer as slice of old
var buf2 = buf1.slice(19,lnth);
console.log("Buffer2: " + buf2);

console.log("Buffer2 to String: " + buf2.toString()); // build our buffer

//modify second buffer
buf2.fill('*',0,5);
console.log(buf2.toString()); 

// show impact on first buffer
console.log(buf1.toString());

//compare between buffer
console.log("Buffer1: " + buf1);
console.log("Buffer2: " + buf1);

if (buf1.equals(buf2)); 
console.log('buffers are equal');

//copy buffer
var buf3 = new Buffer(11);
buf1.copy(buf3);
console.log("Buffer 3: " + buf3.toString()); 