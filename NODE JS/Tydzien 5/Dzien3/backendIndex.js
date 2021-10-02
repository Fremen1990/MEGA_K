const {createServer} = require('http');
const {readFile} = require('fs').promises;

const server = createServer();

server.on('request', async (req, res) => {

    const html = await readFile('./index.html', 'utf8');

    res.writeHead(200, {
        'Content-type': 'text-html',
    })

    res.end(html);

})
server.listen(3000, 'localhost');