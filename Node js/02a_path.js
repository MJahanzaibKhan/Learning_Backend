const { dirname } = require('path');
const path = require('path');

console.log('__filename ', __filename);
console.log('__dirName ', __dirname);

var pathObj = path.parse(__filename);

console.log(pathObj);