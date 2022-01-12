const {createServer} = require('http');
// const server = createServer();
// console.log(createServer())

//1st METHOD
//
// createServer((req, res) => {
//     console.log("Hello from local server!!!");
//
//     res.writeHead(200, {'content-type': 'text/html'})
// res.end('<h1>Hello on my server!! :) </h1>')
//
// }).listen(3000, '127.0.0.1');


//2nd METHOD
const server = createServer();
server.on('request',  (req, res)=>{
    res.writeHead(200, {
        'Content-type' : 'text/html',
    })
    res.end('<h1>Hello from 2nd server method ! :) </h1>');
});
server.listen(3000, "localhost");