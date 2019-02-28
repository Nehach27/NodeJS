const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHash('sha256', secret)  
                   .update('Welcome to NodeJS')  
                   .digest('hex');  
console.log(hash);  