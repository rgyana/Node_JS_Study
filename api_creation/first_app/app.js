// function sayHello(name) {
//     console.log("Hello " + name);
// }

// sayHello("Aditya");
// console.log(window);

// console.log(); //global

// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// var message = "";
// console.log(window.message);

// globalThis.setTimeout();
// globalThis.clearTimeout();
// globalThis.setInterval();
// globalThis.clearInterval();

// var message = "";
// console.log(globalThis.message);

// var sayHello = function () {

// }

// window.sayHello();

// console.log(module);

// Exporting Module
// const logger = require('./logger');
// logger('please show the message');
// logger.log('message'); // console.log(logger);

// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);

//OS MODULE
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total memory: ' + totalMemory);

// Template String
// ES6 / ES2015: ECMAScript 6
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


// SYNCRONOUS METHODS
// const fs = require('fs');
// const file = fs.readdirSync('./');
// console.log(file);

// ASYNCRONOUS METHOD
// fs.readdir('./', function (err, files) {
//     if (err) {
//         console.log('Error', err);
//     }
//     else {
//         console.log('Result', files);
//     }
// });

// EVENTS
// One of the core concept of the node is events, A lot of core functionality is based on this concept of events
// Event is basically a signal which indicates that something has happend in our application.
// const EventEmitter = require('events');
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// register a listener
// emitter.on('MessageLogged', function () {
//     console.log('Listener called');
// })

// emitter.emit('MessageLogged');
// emit means actually making a noise or produce some noise or signalling that some event has happend.
// Lister is the function that would be called when the event has raised

// EVENT ARGUMENTS
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messagedLogged', function (arg) {
//     console.log('Listener Called', arg);
// })
// emitter.on('messagedLogged', (arg) => { // also we can use arrow function
//     console.log('Listener Called', arg);
// })
// emitter.emit('messagedLogged', { id: 1, url: 'http://' });

// EXETENDING EVENTEMITTER
// In the real world is quite rare that you will use this Event Emitter object directly
// Instead of that we creates a class having all the capability what event emitter has then we use that class
// const Logger = require('./logger');
// logger = new Logger();
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called ', arg);
// });
// logger.log('message');
// now we can use require() func to import to Logger module and then we have created one instsance of that class
// then we have used on() to show the message and passed one argument because on() is a callback function.
// at the end we have logged the message to get response.


// HTTP MODULE
const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('hello India');
        response.end();
    }

    if (request.api === '/api/courses') {
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000...');
