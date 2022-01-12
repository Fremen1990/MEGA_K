const {createServer} = require('http');
const server = createServer();

server.on('request', async (req, res) => {
// console.log(req.headers['cache-control'])

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html',
            'X-My-header': "Hello WORLD!!!",
        })

        res.write('<h1>Hello WORLD!!</h1>');
        res.write('<h1>Hello WORLD!!</h1>');
        res.write('<h1>Hello WORLD!!</h1>');
        res.end();

    } else if (req.url !== '/') {
        res.writeHead(404, {
            'Content-type': 'text/html',
        })
        res.end('<h1>Sorrryy, not found </h1>');
    }
});
server.listen(3000, 'localhost')

