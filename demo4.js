let event=require("events");
let eventEmitter=new event.EventEmitter();
eventEmitter.on('showName',function () {
  console.log('showName');
  eventEmitter.emit('end');
});
eventEmitter.on('end',function () {
  console.log('end');
});
eventEmitter.emit('showName');