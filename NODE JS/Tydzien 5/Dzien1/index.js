// const {tickTock} = require('./tick-tock')
const {TickTock} = require('./tick-tock')

// const events = tickTock();

// console.log(events);
// events
//     .on('Secondelapsed', (data, data2, data3_end) => {
//         console.log("Hiiiii", data, data2, data3_end)
//     })
//     .on('Secondelapsed', (data) => {
//         console.log('tgstrgs')
//     })

new TickTock()
    .on('Secondelapsed', (data, data2, data3_end) => {
        console.log("Hiiiii", data, data2, data3_end)
    })
    .on('Secondelapsed', (data) => {
        console.log('tgstrgs')
    })