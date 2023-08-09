// when ever we want to raise signal that something has happend in the application then we use Event Emitter but instead of Event Emitter we can create a class with capability of an Event Emitter.
// we can add some additonal features to that class also.
// const EventEmitter = require('events');

// const url = 'http://mylogger.io/log';

// class Logger extends EventEmitter {
//     log(message) {
//         console.log(message);
//         // raise an event
//         this.emit('messageLogged', { id: 1, url: 'http://' });
//     }
// }

// module.exports = Logger;
// After class defined we need to export the class to access outside of this module/file.


// module.exports.log = log;
// module.exports.endPoint = url;
