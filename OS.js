var os = require('os');
console.log('Using end of line' + os.EOL + 'to insert a new line');

console.log("Returns the endianness of the CPU: " + os.endianness());
console.log("Returns the operating system's default directory for temporary files: " + os.tmpdir());
console.log("Returns the home directory: "+os.homedir());
console.log("Returns the number of free memory of the system: "+os.freemem());
console.log("Returns an array containing the load averages, (1, 5, and 15 minutes): "+os.loadavg());
console.log("Returns the number of total memory of the system: "+os.totalmem());
console.log("Returns an array containing information about the computer's CPUs: "+os.cpus());