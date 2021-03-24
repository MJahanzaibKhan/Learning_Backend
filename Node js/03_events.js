const EventEmitter = require('events');
const emitter = new EventEmitter();

// What is Class....
// Class: Human (Blue print)
// OBJECT: JHON (ACUTAL OBJECT)

// Register a Listener
console.log('Emiting......')

emitter.on('messageLogged', function (arg) {
  console.log('Listener Called ', arg)
})

//Raise Event...
emitter.emit('messageLogged ', { id: '0001', url: 'https://myUrl.com' });

// Event Fire after 3000ms

setTimeout(() => {
  console.log('Emiting From setTimeout')
  emitter.emit('messageLogged ', { id: '0002', url: 'https://myUrl.com' });
}, 3000);