const {EventEmitter} = require('events')

class TickTock extends EventEmitter{
    constructor() {
        super();

        setInterval(() => {
            this.emit('Secondelapsed', 'Test', 'Test2', 'The end.');
        }, 1000);
    }
}
// function tickTock() {
//     const ee = new EventEmitter();
//     setInterval(() => {
//         ee.emit('Secondelapsed', 'Test', 'Test2', 'The end.');
//     }, 1000);
//     return ee;
// }
// module.exports = {tickTock};

module.exports ={
    TickTock,
}
