var fs = require('fs');

// ** SYNC **
// console.log('SYNC 1');
// var file = fs.readdirSync('./'); //10min IO BLOCK
// console.log('SYNC 2', file)

// ** ASYNC **
console.log('ASYNC 1')
fs.readdir('./', (err, files) => {
  if (err) {
    console.log('err', err)
  } else {
    console.log('Files', files)
  }
})
console.log('ASYNC 2')