const {createServer} = require('http');

const server = createServer();

let counter='';

server.on('request', (req,res)=>{


    if(req.url === '/'){

        counter++;

        console.log(`Server is open: ${counter} times`);

        res.writeHead(200,{
            'content-type':'text/html',
        } )

        res.write('<h1>Count how many times server is open: </h1>')

        // res.write(counter)

        res.end(counter.toString());


    }
});

server.listen(3000, '127.0.0.1');