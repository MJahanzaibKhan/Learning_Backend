var fs = require('fs');

function readFile(srcPath) {
  fs.readFile(srcPath, 'utf8', (err, data) => {
    (err) ? console.log('Read Err ', err) : console.log('Read ', data)
  })
}

function writeFile(srcPath, data) {
  fs.writeFile(srcPath, data, (err) => {
    (err) ? console.log('Write Err ', err) : console.log('Write Successfully')
  })
}

function appendFile(savePath, data) {
  fs.appendFile(savePath, data, (err) => {
    (err) ? console.log('Append Err ', err) : console.log('Append Successfully')
  })
}

writeFile('./abc.txt', 'hello world');
// readFile('./abc.txt');
// appendFile('./abc.txt', ' Append Data')