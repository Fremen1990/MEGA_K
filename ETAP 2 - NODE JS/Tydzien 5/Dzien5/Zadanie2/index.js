const {createServer} = require('http');
const {calc} = require('./calc');
const server = createServer();

server.on('request', (req, res) => {

    // let operator = '';
    // let firstNumber = '';
    // let secondNumber = '';

    if (req.url !== '/favicon.ico') {
        // console.log(req.url.split('/'))
        // const source = req.url.split('/');
        // operator = source[1];
        // firstNumber = parseInt(source[2]);
        // secondNumber = parseInt(source[3]);

        let [, operator, firstNumber, secondNumber] = req.url.split('/');
        // console.log(typeof (operator), typeof (firstNumber), typeof (secondNumber));

        const result = calc(operator, Number(firstNumber), Number(secondNumber))

        console.log(`Result is: ${result}`)

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })

        res.write("\n KALK\n\n Number: \n\n");
        res.write(firstNumber.toString());
        res.write("\n\n" + operator);
        res.write("\n\n to: \n\n");
        res.write(secondNumber.toString());
        res.write("\n\n Result is: \n\n");
        res.write(result.toString());
        res.end();
    }
})
server.listen(3000, '127.0.0.1');

// http://localhost:3000/add/2/2
// http://localhost:3000/subtract/2/2
// http://localhost:3000/multiply/2/2
// http://localhost:3000/add/2/2