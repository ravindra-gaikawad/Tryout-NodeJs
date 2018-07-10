var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a call!');
};

//Assign the event handler to an event:
eventEmitter.on('call', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('call');